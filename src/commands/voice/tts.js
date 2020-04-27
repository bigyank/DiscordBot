module.exports = {
  name: 'tts',
  description: 'TTS',
  execute({ channel }, args) {
    const message = args.join(' ');
    channel.send(message, { tts: true });
  },
};
