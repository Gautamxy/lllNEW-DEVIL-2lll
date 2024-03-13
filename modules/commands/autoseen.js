const fs = require('fs-extra');
const pathFile = __dirname + '/cache/autoseen.txt';
if (!fs.existsSync(pathFile))
  fs.writeFileSync(pathFile, 'false');
  
module.exports.config = {
	name: "autoseen",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "NTKhang",
	description: "Bật/tắt tự động seen khi có tin nhắn mới",
	commandCategory: "ADMIN",
	usages: "on/off",
	cooldowns: 5
};

module.exports.handleEvent = async ({ api, event, args }) => {
  const isEnable = fs.readFileSync(pathFile, 'utf-8');
  if (isEnable == 'true')
    api.markAsReadAll(() => {});
};

module.exports. run = async ({ api, event, args }) => {
  try {
	if (args[0] == 'on') {
	  fs.writeFileSync(pathFile, 'true');
	  api.sendMessage('━━▣━━◤◢━━▣━━━\n\n𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥 𝐎𝐧 𝐚𝐮𝐭𝐨𝐬𝐞𝐞𝐧\n\n━━▣━━◤◢━━▣━━━', event.threadID, event.messageID);
	}
	else if (args[0] == 'off') {
	  fs.writeFileSync(pathFile, 'false');
	  api.sendMessage('━━▣━━◤◢━━▣━━━\n\n𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥 𝐎𝐧 𝐚𝐮𝐭𝐨𝐬𝐞𝐞𝐧\n\n━━▣━━◤◢━━▣━━━', event.threadID, event.messageID);
	}
	else {
	  api.sendMessage(`━━▣━━◤◢━━▣━━━\n\n𝐖𝐫𝐨𝐧𝐠 𝐬𝐲𝐧𝐭𝐚𝐱 \n𝐄𝐱𝐚𝐦𝐩𝐥𝐞:- ${global.config.PREFIX}𝐚𝐮𝐭𝐨𝐬𝐞𝐞𝐧 𝐎𝐧 /𝐨𝐟𝐟 \n\n━━▣━━◤◢━━▣━━━`, event.threadID, event.messageID);
	}
  }
  catch(e) {
    console.log(e);
  }
};