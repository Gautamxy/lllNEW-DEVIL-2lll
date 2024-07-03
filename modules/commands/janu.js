const fs = require("fs");
module.exports.config = {
	name: "janu",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Simamto", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "priyo",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("raihan")==0 || event.body.indexOf("rayhan")==0 || event.body.indexOf("Raihan")==0 || event.body.indexOf(", রায়হান")==0) {
		var msg = {
				body: "─༅༎•রায়হান জানু তাহ࿐❥\n\n(༎ຶٹ༎ຶ) 𝗫𝗔𝗜𝗞𝗢 𝗥𝗔𝗜𝗛𝗔𝗡 𝗫.𝗫.𝗫 (༎ຶٹ༎ຶ)",
				attachment: fs.createReadStream(__dirname + `/noprefix/janu.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😊", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}
