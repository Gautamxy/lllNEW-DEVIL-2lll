module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "CatalizCS", //fixing ken gusler
	description: "Notify bot or group member with random gif/photo/video",
	dependencies: {
		"fs-extra": "",
		"path": "",
		"pidusage": ""
	}
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

	const path = join(__dirname, "cache", "joinGif");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
api.changeNickname(`[ ${global.config.PREFIX} ]• ${(!global.config.BOTNAME) ? "bot" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		const fs = require("fs");
		return api.sendMessage("", event.threadID, () => api.sendMessage({body:`🌹💙আসসালামু আলাইকুম 💙🌹
  
💙 সবাইকে আমার পক্ষ থেকে শুভেচ্ছা 💙

➪ 𝐀𝐘𝐀𝐍 𝐂𝐇𝐎𝐔𝐃𝐇𝐔𝐑𝐘 ☺︎︎❤︎

☾︎ 𝐁𝐎𝐓 𝐂𝐎𝐍𝐍𝐄𝐂𝐓𝐄𝐃 ☽︎


👉 𝐀𝐃𝐃𝐈𝐍𝐆 𝐓𝐇𝐄 𝐆𝐑𝐎𝐔𝐏 👈

🤖 𝐒𝐔𝐂𝐂𝐄𝐒𝐅𝐔𝐋 🤖
 
____________________________________\n\n𝐉𝐄 𝐊𝐔𝐍𝐎 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐃𝐄𝐊𝐇𝐓𝐄 ${global.config.PREFIX}𝐇𝐄𝐋𝐏 𝐔𝐒𝐄 𝐊𝐎𝐑𝐄𝐍

\n 🗿 উদাহরণ 💙


\n${global.config.PREFIX}mark (text)\n${global.config.PREFIX}lexi (text)\n${global.config.PREFIX}trump (text)\n${global.config.PREFIX}info
____________________________________
যেকোনো অভিযোগ অথবা 𝐇𝐄𝐋𝐏 এর জন্য 📞𝐁𝐎𝐒𝐒

👑𝐁𝐀𝐏𝐏𝐀 𝐃𝐄𝐁𝐍𝐀𝐓𝐇👑📲📞 কে নক করতে পারেন!
👉𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐈𝐃 𝐋𝐈𝐍𝐊👇

https://www.facebook.com/84PP4
-
`, attachment: fs.createReadStream(__dirname + "/cache/N/bb.mp4")} ,threadID));
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinGif");
			const pathGif = join(path, `${threadID}.gif`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "🌹💙 𝐖𝐄𝐋𝐋𝐂𝐎𝐌𝐄 💙🌹\n\n {name} [🌹আপনি এই গ্রুপের [ {soThanhVien} ] নং মেম্বার 👫]\n\n[ {threadName} ]  গ্রুপ এর পক্ষ থেকে আপনাকে সাগতম ♥\n\n🥰প্রিয় মেম্নার🥰 \n\n┌────♣─────┐\n  🌹𝐖𝐄𝐋𝐂𝐎𝐌𝐄🌹\n└────♣─────┘\n\n🌹♻️𝐎𝐖𝐍𝐄𝐑 : 𝐀𝐘𝐀𝐍 𝐂𝐇𝐎𝐔𝐅𝐇𝐔𝐑𝐘 \n\n 𝐊𝐈𝐍𝐆 𝐎𝐅 𝐂𝐘𝐁𝐄𝐑 𝐖𝐎𝐑𝐋𝐃 👑" : msg = threadData.customJoin;
			msg = msg
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  'You' : 'Friend')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else if (randomPath.length != 0) {
				const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
				formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
			}
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
                    }
