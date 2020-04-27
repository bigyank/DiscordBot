module.exports = {
  name: 'ping',
  description: 'Ping!',
  execute({ channel }, [times = 1]) {
    if (times > 5) {
      return channel.send('stupid fuck');
    }
    for (let i = 0; i < times; i += 1) {
      channel.send('pong');
    }
  },
};
