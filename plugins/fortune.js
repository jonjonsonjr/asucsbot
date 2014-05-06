module.exports = function (bot) {
  var fortunes = [
    "Your future is certain",
    "Reply hazy, try again",
    "Bad luck",
    "Horrible luck",
    "Terrible luck",
    "Good luck",
    "Things will be looking up soon",
    "Godly luck",
    "You will meet a dark handsome stranger",
    "You will slave the world",
    "Today's weather is set for a balmy sixty degrees",
    "No prequizzes for systems today",
    "No food or drink in the labs",
    "Ray sucks",
    "No chemistry majors in the lab today",
    "Emacs is better than vim",
    "Vim is better than emacs"
  ];

  bot.when(/^!fortune$/, function (res, m) {
    var i = Math.floor(Math.random() * fortunes.length);
    var f = fortunes[i];

    res.send(f);
  });

  bot.when(/^!help$/, function (res) {
    res.send('!fortune');
  });
};
