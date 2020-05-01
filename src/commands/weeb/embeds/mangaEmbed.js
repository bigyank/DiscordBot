const { MessageEmbed } = require('discord.js');

const feilds = ['status', 'volumes', 'score', 'chapters', 'rank'];
const mangaEmbed = async (mangaInfo) => {
  const embedMsg = new MessageEmbed();
  embedMsg
    .setTitle(mangaInfo.title)
    .setURL(mangaInfo.url)
    .setAuthor(mangaInfo.authors[0].name)
    .setDescription(mangaInfo.synopsis)
    .setImage(mangaInfo.image_url)
    .setFooter(
      'API provided by Jikan',
      'https://jikan.moe/assets/images/logo/jikan.logo.png'
    )
    .addField('Published', mangaInfo.published.string, true);

  Object.keys(mangaInfo).forEach((key) => {
    console.log(key, mangaInfo.key);
    feilds.includes(key) ? embedMsg.addField(key, mangaInfo[key], true) : null;
  });
  /*
    .addField(
      { name: 'Status', value: mangaInfo.status, inline: true },
      { name: 'Volumes', value: mangaInfo.volumes, inline: true },
      { name: 'Score', value: mangaInfo.score, inline: true },
      { name: 'Chapters', value: mangaInfo.chapters, inline: true },
      { name: 'Rank', value: mangaInfo.rank, inline: true },
      { name: 'Published', value: mangaInfo.published.string, inline: true }
    );
*/
  return embedMsg;
};

module.exports = mangaEmbed;
