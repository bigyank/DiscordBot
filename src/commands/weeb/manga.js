const Discord = require('discord.js');
const jikanjs = require('jikanjs'); // Uses per default the API version 3

const searchAnime = async (args) => {
  const searchTerm = args.join(' ');
  const {
    results: [fItem],
  } = await jikanjs.search('manga', searchTerm);
  return fItem;
};

const embed = async (args) => {
  const Info = await searchAnime(args);
  const embedMsg = new Discord.MessageEmbed()
    .setTitle(Info.title)
    .setDescription(Info.synopsis)
    .setColor('#3535')
    .setImage(Info.image_url);
  return embedMsg;
};
module.exports = {
  name: 'test',
  description: 'for testing purposes',
  async execute({ channel }, args) {
    channel.send(await embed(args));
  },
};
