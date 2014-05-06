var bot = require('./lib/bot');

// plugins
require('./plugins/fortune')(bot);
require('./plugins/blaze')(bot);
require('./plugins/remember')(bot);

// reply with a greeting or say 'wat'
bot.when(/^boten:\s*(hi|hello|hey)/, function (res, m) {
  res.send(m[1]);
});

bot.when(/\b(ray|sucks|weather)\b/, function (res, m) {
  res.send('ray sucks');
});

bot.connect('boten', 'password', '#asucs');
