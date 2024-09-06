const chalk = require('chalk');
function randomColor() {
    var color = "";
    for (var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length == 1 ? "0" + sub : sub);
    } 
   return "#" + color;
};
module.exports = (data, option) => {
  switch (option) {
    case "warn":
        console.log(chalk.bold.hex("#ff0000").bold('» Log « ') + data);
      break;
    case "error":
      console.log(chalk.bold.hex("#ff0000").bold('» Log « ') + data);
      break;
    default:
        console.log(chalk.bold.hex(randomColor()).bold(`${option} » `) + data);
      break;
  }
}

module.exports.loader = (data, option) => {
  switch (option) {
    case "warn":
      console.log(chalk.bold.hex(randomColor()).bold(" [ ARIF BABU ] ") + chalk.bold.hex("#8B8878").bold(data)+chalk.bold.hex("FF00DD")("\n✧➜  ✧ ✧ ✧ ✧ ✧ ✧ 𝐀RIF-𝐏𝐑𝐎𝐉𝐄𝐂𝐓 𝐋𝐈𝐒𝐓 (👑)✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧" ))
      break;
    case "error":
    console.log(chalk.bold.hex(randomColor()).bold(" [ ARIF-𝐏𝐑𝐎𝐉𝐄𝐂𝐓 ] ") + data+chalk.bold.hex("5EFF00")("\n✧➜  ✧ ✧ ✧ ✧ ✧ ✧ 𝐀RIF-𝐏𝐑𝐎𝐉𝐄𝐂𝐓 𝐋𝐈𝐒𝐓 (👑)✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧" ));
      break;
    default:
      console.log(chalk.bold.hex(randomColor()).bold(" [ ARIF 𝐕3 ] ") + chalk.bold.hex(randomColor()).bold(data) +chalk.bold.hex("FFF0000")("\n✧➜  ✧ ✧ ✧ ✧ ✧ ✧ 𝐀RIF-𝐏𝐑𝐎𝐉𝐄𝐂𝐓 𝐋𝐈𝐒𝐓 (👑)✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧" ));
      break;
  }
}
