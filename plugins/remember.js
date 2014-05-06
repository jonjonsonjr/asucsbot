module.exports = function (bot) {
  bot.when(/^boten: (.*\S.*) is "(.*\S.*)"$/, function (res, m) {
    bot.when(new RegExp(m[1]), function (res) {
      res.send(m[2]);
    });

    res.send('ok');
  });

  bot.when(/^!help$/, function (res) {
    res.send(bot.name + ': <regex> is "<response>"');
  });
};
