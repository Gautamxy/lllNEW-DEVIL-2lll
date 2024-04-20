//**credits Fb id : https://m.me/MR.AYAN.2X **//
module.exports.config = {
  name: "shoti",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "MR.AYAN",
  description: "hot girl",
  commandCategory: "Hình ảnh",
  usages: "[hot girl]",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports. run = async ({ api, event, args }) => {

	api.setMessageReaction("⏳", event.messageID, (err) => {
		 }, true);
api.sendTypingIndicator(event.threadID, true);

	const { messageID, threadID } = event;
	const fs = require("fs");
	const axios = require("axios");
	const request = require("request");
	const prompt = args.join(" ");

	if (!prompt[0]) { api.sendMessage("✅𝒑𝒍𝒆𝒂𝒔𝒆 𝒘𝒂𝒊𝒕 𝒅𝒐𝒘𝒏𝒍𝒐𝒂𝒅 𝒗𝒊𝒅𝒆𝒐 𝒇𝒐𝒓 𝒚𝒐𝒖...", threadID, messageID);
		}

 try {
	const response = await axios.post(`https://shoti-srv1.onrender.com/api/v1/get`, { apikey: `$shoti-1hg4gifgnlfdmeslom8` });

	let path = __dirname + `/cache/shoti.mp4`;
	const file = fs.createWriteStream(path);
	const rqs = request(encodeURI(response.data.data.url));
	rqs.pipe(file);
	file.on(`finish`, () => {
		 setTimeout(function() {
			 api.setMessageReaction("✅", event.messageID, (err) => {
					}, true);
			return api.sendMessage({
			body: `✅\n𝖴𝗌𝖾𝗋𝗇𝖺𝗆𝖾 : @${response.data.data.user.username}\n𝖭𝗂𝖼𝗄𝗇𝖺𝗆𝖾 : ${response.data.data.user.nickname}`, 
			attachment: fs.createReadStream(path)
		}, threadID);
			}, 5000);
				});
	file.on(`error`, (err) => {
			api.sendMessage(`Error: ${err}`, threadID, messageID);
	});
	 } catch (err) {
		api.sendMessage(`Error: ${err}`, threadID, messageID);
	};
}; 
