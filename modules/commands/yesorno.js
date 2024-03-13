module.exports.config = {
    name: "yesorno",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Prince Sanel",
    description: "provide a question and randomly yes or no",
    commandCategory: "random",
    usages: "[text]",
    cooldowns: 2,
};
module.exports.run = async function({ api, event, args }) {
const axios = require("axios");
const request = require('request');
const fs = require("fs");
let { messageID, threadID, senderID, body } = event;
const ans = args[0];
if (!ans) return api.sendMessage("Please provide a question..", threadID, messageID);
try {
api.sendMessage("Getting Answer..", threadID, messageID);
const res = await axios.get(`https://lyapi.rapos93130.repl.co/api/yesorno`);
const response = res.data.url;
var callback = () => api.sendMessage({ body: `Answer: ${res.data.answer}`, attachment: fs.createReadStream(__dirname + "/cache/yesorno.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/yesorno.gif"));
    return request(encodeURI(response)).pipe(fs.createWriteStream(__dirname + "/cache/yesorno.gif")).on("close", () => callback());
} catch (error) {
api.sendMessage("An error occurred while making the API request.", threadID , messageID);
}
};