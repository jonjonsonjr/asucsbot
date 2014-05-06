var bot = require('./lib/bot');

// plugins
require('./plugins/fortune')(bot);

// reply with a greeting or say 'wat'
bot.when(/^boten:\s*(hi|hello|hey)/, function (res, m) {
  res.send(m[1]);
});

bot.when(/^boten: (.*\S.*) is "(.*\S.*)"$/, function (res, m) {
  bot.when(new RegExp(m[1]), function (res) {
    res.send(m[2]);
  });

  res.send('ok');
});

bot.when(/\b(ray|sucks|weather)\b/, function (res, m) {
  res.send('ray sucks');
});

// blaze it
bot.every(60 * 1000, function (res) {
  var now = new Date();
  var hour = ((now.getHours() + 11) % 12) + 1;
  var min = now.getMinutes();

  if (hour === 4 && min === 20) {
    res.send('420 blaze it');
  }
});

bot.connect('boten', 'password', '#asucs');
