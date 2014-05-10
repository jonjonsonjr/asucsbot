var ircbot = require('irc-robot');

var bot = ircbot({
  name: 'boten',
  pass: 'password',
  chan: '#asucs'
});

// plugins
require('./plugins/fortune')(bot);
require('./plugins/blaze')(bot);
require('./plugins/remember')(bot);

bot.on(/^boten:\s*(hi|hello|hey)/, function (req, res) {
  res.send(req.matches[1]);
});

bot.on(/\b(ray|sucks|weather)\b/, function (req, res) {
  res.send('ray sucks');
});

bot.connect();
