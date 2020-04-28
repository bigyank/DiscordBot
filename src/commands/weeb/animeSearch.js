const search = require('./search');
const embed = require('./embedSearch');

const animeSearch = async (args) => {
  const searchType = 'anime';
  const searchTerm = args.join(' ');
  const animeList = await search(searchType, searchTerm);
  return embed(animeList, searchTerm, searchType);
};

module.exports = {
  name: 'asearch',
  description: 'search for anime',
  async execute({ channel }, args) {
    channel.send(await animeSearch(args));
  },
};
