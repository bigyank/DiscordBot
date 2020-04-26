/**
 * A ping pong bot, whenever you send "ping", it replies "pong".
 */
const path = require('path');
const fs = require('fs');
const { Client, Collection } = require('discord.js');
const { prefix } = require('../config.json');
require('dotenv').config();

const client = new Client();
client.commands = new Collection();

const commandPath = path.join(__dirname, './commands');
const commandFiles = fs
  .readdirSync(commandPath)
  .filter((file) => file.endsWith('.js'));

commandFiles.forEach((file) => {
  const command = require(path.join(commandPath, file));
  client.commands.set(command.name, command);
});

client.once('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  if (!client.commands.has(command)) return;

  try {
    client.commands.get(command).execute(message, args);
  } catch (e) {
    console.log(e);
    message.channel.send('Bot had a fart');
  }
});

client.login(process.env.BOT_CLIENT_ID);
