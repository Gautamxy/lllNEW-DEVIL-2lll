module.exports.config = {
	name: "admin3",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "AYAN",
	description: "Admin and Bot info.",
	commandCategory: "Owner",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【HH:mm:ss】");
var link =                                     
["https://i.ibb.co/n84MZYn/image.jpg"];
var callback = () => api.sendMessage({body:` ╾━╤デ╦︻(▀̿Ĺ̯▀̿ ̿) 𝐀𝐃𝐌𝐈𝐍 𝐀𝐍𝐃 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍  
(⌐▀͡ ̯ʖ▀)︻̷┻̿═━一-

☄️𝔹𝕠𝕥 ℕ𝕒𝕞𝕖︎︎︎☄️: ${global.config.BOTNAME}

🔥𝓑𝓸𝓽 𝓐𝓭𝓶𝓲𝓷🔥☞︎︎︎ ★>𝙈𝘼𝙃𝙄 𝘼𝙃𝙈𝙀𝘿 <★☜︎︎︎✰💔🥀

🙈𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐈𝐃 𝐋𝐢𝐧𝐤🙈➪ ${global.config.OWNERLINK} 💞🕊️

👋𝔽𝕠𝕣 𝔸𝕟𝕪 𝕂𝕚𝕟𝕕 𝕆𝕗 ℍ𝕖𝕝𝕡 ℂ𝕠𝕟𝕥𝕒𝕔𝕥 𝕆𝕟 𝕋𝕖𝕝𝕖𝕘𝕣𝕒𝕞  𝕌𝕤𝕖𝕣𝕟𝕒𝕞𝕖 👉 @mahi😇

✧══════•❁❀❁•══════✧

🌸𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱🌸: ☞︎︎︎ ${global.config.PREFIX} ☜︎︎︎✰ 

♥️𝓑𝓸𝓽 𝓞𝔀𝓷𝓮𝓻♥️: ☞︎︎︎ ★𝙈𝘼𝙃𝙄 𝘽𝘼𝘽𝙔🌸 ☜︎︎︎✰ 

🥳𝕌ℙ𝕋𝕀𝕄𝔼🥳 𝟚𝟜/𝟟

🌪️𝐓𝐨𝐝𝐚𝐲 𝐢𝐬🌪️ ☞︎︎︎☜︎︎︎✰ ${juswa} 

⚡𝐁𝐨𝐭 𝐢𝐬 𝐫𝐮𝐧𝐧𝐢𝐧𝐠⚡ ${hours}:${minutes}:${seconds}.

✅𝓣𝓱𝓪𝓷𝓴𝓼 𝓯𝓸𝓻 𝓾𝓼𝓲𝓷𝓰 ${global.config.BOTNAME} 𝓑𝓸𝓽🖤


🦢🍒•••ꞪɛᏒɛ ɪʂ ɮ❍┼ ❍ωɳɜɽ ɳaʍɜ•••🌷💞
┏━🕊️━━°❀•°:🎀🧸💙🧸🎀:°•❀°━━💞━┓
🌸✦✧✧✧✧✰🍒𝙈𝘼𝙃𝙄🌿✰✧✧✧✧✦🌸
┗━🕊️━━°❀•°:🎀🧸💙🧸🎀:°•❀°━━💞━┛


`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
