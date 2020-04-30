const { MessageEmbed } = require('discord.js');

const embed = async (list, searchTerm, searchType) => {
  const embedMsg = new MessageEmbed();
  embedMsg
    .setTitle(searchTerm)
    .setDescription(`${searchType} search results for ${searchTerm}`)
    .setColor('#0099ff')
    .setFooter(
      'API provided bt Jikan',
      'https://jikan.moe/assets/images/logo/jikan.logo.png'
    );
  list.map((result) =>
    embedMsg.addField(`MAL_ID : ${result.mal_id}`, `Title : ${result.title}`)
  );
  return embedMsg;
};

module.exports = embed;
