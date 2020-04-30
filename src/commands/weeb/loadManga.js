const jikanjs = require('jikanjs');
const search = require('./search');
const mangaEmbedMsg = require('./embeds/mangaEmbed');

const manga = async (args) => {
  const searchType = 'manga';
  const searchTerm = args.join(' ');
  if (!isNaN(searchTerm)) {
    return jikanjs.loadManga(Number(searchTerm));
  }
  if (searchTerm.length < 3) {
    throw new Error('unsatisfied parameter');
  }
  const [fItem] = await search(searchType, searchTerm);
  return jikanjs.loadManga(fItem.mal_id);
};

const embedManga = async (args) => {
  const mangaInfo = await manga(args);
  return mangaEmbedMsg(mangaInfo);
};

module.exports = {
  name: 'manga',
  description: 'load info of a manga',
  async execute({ channel }, args) {
    try {
      channel.send(await embedManga(args));
    } catch (error) {
      channel.send(error.message);
    }
  },
};
