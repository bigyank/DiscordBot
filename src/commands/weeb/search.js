const jikanjs = require('jikanjs');

const searchAnime = async (searchType, searchTerm) => {
  const { results } = await jikanjs.search(searchType, searchTerm);
  return results;
};

module.exports = searchAnime;
