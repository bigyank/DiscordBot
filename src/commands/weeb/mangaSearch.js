const search = require('./search');
const embed = require('./embedSearch');

const mangaSearch = async (args) => {
  const searchType = 'manga';
  const searchTerm = args.join(' ');
  const animeList = await search(searchType, searchTerm);
  return embed(animeList, searchTerm, searchType);
};

module.exports = {
  name: 'msearch',
  description: 'search for manga',
  async execute({ channel }, args) {
    channel.send(await mangaSearch(args));
  },
};
