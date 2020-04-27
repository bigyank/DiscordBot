/**
 * A ping pong bot, whenever you send "ping", it replies "pong".
 */
const path = require('path');
const { Client, Collection } = require('discord.js');
const glob = require('glob');
const { prefix } = require('../config.json');
require('dotenv').config();

const client = new Client();
client.commands = new Collection();

const commandPath = path.join(__dirname, './commands');
const options = {
  cwd: commandPath,
};

glob('**/*.js', options, function (err, files) {
  files.forEach((file) => {
    const command = require(path.join(commandPath, file));
    client.commands.set(command.name, command);
  });
});

client.once('ready', () => {
  client.user.setActivity('with your MOM', { type: 'PLAYING' });
  console.log('I am ready!');
});

// Create an event listener for messages

client.on('message', (message) => {
  // return null if prefix doesnt match or other bot messages
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();

  // return null if no no command after prefix
  if (!client.commands.has(commandName)) return;
  const command = client.commands.get(commandName);

  // dynamically return commands
  try {
    command.execute(message, args);
  } catch (e) {
    console.log(e);
    message.channel.send('Bot had a fart');
  }
});

client.login(process.env.BOT_CLIENT_ID);
