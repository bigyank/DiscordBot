const jikanjs = require('jikanjs');
const search = require('./search');
const animeEmbedMsg = require('./embeds/animeEmbed');

const anime = async (args) => {
  const searchType = 'anime';
  const searchTerm = args.join(' ');
  const [fItem] = await search(searchType, searchTerm);
  const animeInfo = await jikanjs.loadAnime(fItem.mal_id);
  return animeInfo;
};

const embedAnime = async (args) => {
  const animeInfo = await anime(args);
  return animeEmbedMsg(animeInfo);
};

module.exports = {
  name: 'anime',
  description: 'load info of a anime',
  async execute({ channel }, args) {
    channel.send(await embedAnime(args));
  },
};
