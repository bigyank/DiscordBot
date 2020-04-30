const jikanjs = require('jikanjs');
const search = require('./search');
const animeEmbedMsg = require('./embeds/animeEmbed');

const anime = async (args) => {
  const searchType = 'anime';
  const searchTerm = args.join(' ');

  if (!isNaN(searchTerm)) {
    return jikanjs.loadAnime(Number(searchTerm));
  }
  if (searchTerm.length < 3) {
    throw new Error('unsatisfied parameter');
  }
  const [fItem] = await search(searchType, searchTerm);
  return jikanjs.loadAnime(fItem.mal_id);
};

const embedAnime = async (args) => {
  const animeInfo = await anime(args);
  return animeEmbedMsg(animeInfo);
};

module.exports = {
  name: 'anime',
  description: 'load info of a anime',
  async execute({ channel }, args) {
    try {
      channel.send(await embedAnime(args));
    } catch (error) {
      console.log('execute -> error', error);
      channel.send(error.message);
    }
  },
};
