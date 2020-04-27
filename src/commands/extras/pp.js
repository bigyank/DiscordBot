const Chance = require('chance');

const chance = new Chance();
const findPP = (person) => {
  const pp = ['8=D', '8===D', '8======D', '8==================D'];
  const ppId = chance.integer({ min: 0, max: pp.length - 1 });
  const userPP = pp[ppId];
  return `${person} has ${userPP}`;
};

module.exports = {
  name: 'pp',
  description: 'PP',
  execute({ channel, mentions, author }, args) {
    if (!args.length) {
      return channel.send(findPP(author));
    }
    const taggedUser = mentions.users.first().id;
    return channel.send(findPP(`<@${taggedUser}>`));
  },
};
