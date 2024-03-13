module.exports.config = {
    name: "restart",
    version: "2.0.2",
    hasPermssion: 2,
    credits: "MR CHAND",
    description: "restart bot",
    commandCategory: "admin-bot",
    usages: "restart",
    cooldowns: 5,
    dependencies: { }
}
 
module.exports.run = async function({ api, args, Users, event}) {
const { threadID, messageID } = event;
const axios = global.nodemodule["axios"];

const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Karachi").format("HH");
    var phut = moment.tz("Asia/Karachi").format("mm");
    var giay = moment.tz("Asia/Karachi").format("ss");
const fs = require("fs");
    let name = await Users.getNameUser(event.senderID)
  if (event.senderID != 100072727941471) return api.sendMessage(`[❗] Restart started `, event.threadID, event.messageID)
if(args.length == 0) api.sendMessage(`=== 『 𝗔𝗨𝗧𝗢 𝗥𝗘𝗦𝗧𝗔𝗥𝗧  』 ====\n━━━━━━━━━━━━━━━━━━\

➝『📢』𝐍𝐀𝐌𝐄 𝐑𝐄𝐒𝐓𝐀𝐑𝐓 : ${name} \n
➝『😍』𝐖𝐀𝐈𝐓 30 𝐒𝐄𝐂𝐎𝐍𝐃𝐒 𝐀𝐋𝐋 𝐁𝐎𝐓 𝐀𝐑𝐄 𝐑𝐄𝐒𝐓𝐀𝐑𝐓𝐈𝐍𝐆 ..... `,event.threadID, () =>process.exit(1))
else{    
let time = args.join(" ");
setTimeout(() =>
api.sendMessage(`➝『📢』𝗕𝗼𝘁 𝘀𝗲̃ 𝗸𝗵𝗼̛̉𝗶 đ𝗼̣̂𝗻𝗴 𝗹𝗮̣𝗶 𝘀𝗮𝘂 : ${gio}s\n➝『⏰』𝗕𝗮̂𝘆 𝗴𝗶𝗼̛̀ 𝗹𝗮̀ : ${gio}:${phut}:${giay} `, threadID), 0)
setTimeout(() =>
api.sendMessage("➝『⏳』Đ𝗮𝗻𝗴 𝗯𝗮̆́𝘁 đ𝗮̂̀𝘂 𝗾𝘂𝗮́ 𝘁𝗿𝗶̀𝗻𝗵 𝗸𝗵𝗼̛̉𝗶 đ𝗼̣̂𝗻𝗴 𝗹𝗮̣𝗶",event.threadID, () =>process.exit(1)), 1000*`${time}`);
}
}