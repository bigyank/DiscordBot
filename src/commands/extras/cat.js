const axios = require('axios');
const Chance = require('chance');

const chance = new Chance();
const getFacts = async () => {
  const factsPromise = await axios.get('https://cat-fact.herokuapp.com/facts');
  const { all: facts } = factsPromise.data;
  const randId = chance.integer({ min: 0, max: facts.length - 1 });
  return facts[randId];
};

module.exports = {
  name: 'cats',
  description: 'gets you amazing cats facts',
  async execute({ channel }) {
    const fact = await getFacts();
    channel.send(fact.text);
  },
};
