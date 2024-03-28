/**
* @AYAN CHOWDHURY
* @warn Do not edit code or edit credits
* @Dont Change This Credits Otherwisw Your Bot Lol
*/
module.exports.config = {
  name: "xan",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "AYAN CHOWDHURY",//don’t change credits
  usePrefix: true,
  description: "Dont Change This Credits Otherwisw Your Bot Lol",
  usages: "[ask]",
  commandCategory: "SIM ✅",
  cooldowns: 2
};

module.exports.run = async ({ api, event,args }) => {
const axios = require("axios");
let query = args.join(" ");
if (!query)
    return api.sendMessage(`𝐇𝐦𝐦 𝐱𝐚𝐧 𝐛𝐨𝐥𝐞𝐧-!!😘🍼`, event.threadID, event.messageID);
const res = await axios.get(`https://nl2-4.deploy.sbs:2016/sim?reply=${query}`);
var plaintext = res.data.answer;
api.sendMessage(plaintext, event.threadID, event.messageID)
}
