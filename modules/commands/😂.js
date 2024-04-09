const fs = require("fs");
module.exports.config = {
	name: "😹",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "AYAN CHOWDHURY", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "😹",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😂")==0 || event.body.indexOf("😹")==0 || event.body.indexOf("🤣")==0 || event.body.indexOf("😁")==0) {
		var msg = {
				body: "ওরে কি সুন্দর হাসিরে আমি ক্রাশ খাইছি!!👀",
				attachment: fs.createReadStream(__dirname + )
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😹", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

				}
