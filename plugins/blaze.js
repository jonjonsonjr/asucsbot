module.exports = function (bot) {
  bot.every(60 * 1000, function (res) {
    var now = new Date();
    var hour = ((now.getHours() + 11) % 12) + 1;
    var min = now.getMinutes();

    if (hour === 4 && min === 20) {
      res.send('420 blaze it');
    }
  });
};
