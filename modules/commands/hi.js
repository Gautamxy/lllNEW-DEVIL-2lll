const fs = require("fs");
module.exports.config = {
	name: "hi",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "AYAN CHOUDHURY", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "hi",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Hello")==0 || event.body.indexOf("Hi")==0 || event.body.indexOf("Hlw")==0 || event.body.indexOf("hi")==0) {
		var msg = {
				body: "✪⋆➣𝐊𝐈𝐍𝐆 𝐑𝐀𝐅𝐈𝐔𝐋✪✓ KE🥰 hi hlw না্ঁ প্রিৃ্ঁয়ৃ্ঁ সাৃ্ঁলাৃ্ঁমৃ্ঁ দিৃ্ঁতেৃ্ঁ শিৃ্ঁখো্ৃঁ🥰🌹👳‍♂️♻️",
				attachment: fs.createReadStream(__dirname +)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🫡", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
