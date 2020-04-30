const { MessageEmbed } = require('discord.js');

const animeEmbed = async (animeInfo) => {
  const embedMsg = new MessageEmbed();
  embedMsg
    .setTitle(animeInfo.title)
    .setURL(animeInfo.url)
    .setAuthor(animeInfo.rating)
    .setDescription(animeInfo.synopsis)
    .addFields(
      { name: 'Status', value: animeInfo.status, inline: true },
      { name: 'Duration', value: animeInfo.duration, inline: true },
      { name: 'Score', value: animeInfo.score, inline: true },
      { name: 'Broadcast', value: animeInfo.broadcast, inline: true },
      { name: 'Rank', value: animeInfo.rank, inline: true },
      { name: 'Episodes', value: animeInfo.episodes, inline: true }
    )
    .setImage(animeInfo.image_url)
    .setFooter(
      'API provided by Jikan',
      'https://jikan.moe/assets/images/logo/jikan.logo.png'
    );

  return embedMsg;
};

module.exports = animeEmbed;
