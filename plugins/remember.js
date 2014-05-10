module.exports = function (bot) {
  bot.on(/^asucsbot: (.*\S.*) is "(.*\S.*)"$/, function (req, res) {
    var reply = req.matches[2];
    bot.on(new RegExp(req.matches[1]), function (req, res) {
      res.send(reply);
    });

    res.send('ok');
  });

  bot.on(/^!help$/, function (req, res) {
    res.send(bot.name + ': <regex> is "<response>"');
  });
};
