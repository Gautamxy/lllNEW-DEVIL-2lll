module.exports.config = {
  name: "joinNoti",
  eventType: ["log:subscribe"],
  version: "1.0.1",
  credits: "Leiam Nash",
  description: "Notify bots or people entering the group",
  dependencies: {
    "fs-extra": ""
  }
};
module.exports.run = async function({ api, event }) {

  const request = require("request");
  const { threadID } = event;
  if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
    api.changeNickname(`【 {global.config.PREFIX} 】${global.config.BOTNAME} | 𝐱𝐚𝐧`, threadID, api.getCurrentUserID());
    return api.sendMessage(`✰━━━━━━━━━━━━━✰\n🤖 𝐓𝐡𝐚𝐧𝐤𝐬 𝐟𝐨𝐫 𝐣𝐨𝐢𝐧𝐢𝐧𝐠 𝐦𝐞 ✅\n \${global.config.BOTNAME}\n \n𝐌𝐲 𝐛𝐨𝐬𝐬 𝐢𝐬 𝐀𝐘𝐀𝐍\n \n📝𝐓𝐡𝐢𝐬 𝐢𝐬 𝐦𝐲 𝐏𝐫𝐞𝐟𝐢𝐱 : 【 ${global.config.PREFIX} 】\n \n𝐒𝐞𝐞 𝐚𝐥𝐥 𝐭𝐡𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬 𝐛𝐲 𝐰𝐫𝐢𝐭𝐢𝐧𝐠 ${global.config.PREFIX}𝐡𝐞𝐥𝐩 📝\n \n𝐖𝐞 𝐮𝐬𝐞 𝐚𝐧𝐝 𝐭𝐞𝐚𝐜𝐡📝\n \n𝐈 𝐰𝐢𝐥𝐥 𝐟𝐥𝐢𝐫𝐭 𝐰𝐢𝐭𝐡 𝐞𝐯𝐞𝐫𝐲𝐨𝐧𝐞 𝐚𝐧𝐝 𝐧𝐨 𝐨𝐧𝐞 𝐰𝐢𝐥𝐥 𝐦𝐢𝐧𝐝⏳🗿⌛\n \n𝐄𝐧𝐣𝐨𝐲 𝐮𝐬𝐢𝐧𝐠 𝐦𝐞🚀\n \n𝐈𝐟 𝐭𝐡𝐞𝐫𝐞 𝐢𝐬 𝐚𝐧𝐲 𝐩𝐫𝐨𝐛𝐥𝐞𝐦 𝐭𝐞𝐥𝐥 𝐀𝐘𝐀𝐍 𝐁𝐎𝐒𝐒 𝐭𝐨 𝐡𝐢𝐦🌈\n \n𝐍𝐨 𝐨𝐧𝐞 𝐰𝐢𝐥𝐥 𝐛𝐞 𝐡𝐮𝐫𝐭 𝐛𝐲 𝐦𝐲 𝐰𝐨𝐫𝐝𝐬, 𝐣𝐮𝐬𝐭 𝐬𝐚𝐲 𝐰𝐡𝐚𝐭 𝐈 𝐭𝐞𝐚𝐜𝐡🖇💻\n \n𝐓𝐡𝐚𝐧𝐤 𝐲𝐨𝐮 𝐟𝐨𝐫 𝐮𝐬𝐢𝐧𝐠 𝐦𝐞 📝 🌈\n✰━━━━━━━━━━━━━✰`, threadID);
  }
  else {
    try {
    const request = require("request");
      const fs = global.nodemodule["fs-extra"];
      let { threadName, participantIDs } = await api.getThreadInfo(threadID);

      const threadData = global.data.threadData.get(parseInt(threadID)) || {};

      var mentions = [], nameArray = [], memLength = [], i = 0;

    let addedParticipants1 = event.logMessageData.addedParticipants;
        for (let newParticipant of addedParticipants1) {
   let userID = newParticipant.userFbId
api.getUserInfo(parseInt(userID), (err, data) => {
      if(err){ return console.log(err)}
     var obj = Object.keys(data);
    var userName = data[obj].name.replace("@", "");     	if (userID !== api.getCurrentUserID()) {  

        nameArray.push(userName);
        mentions.push({ tag: userName, id: userID, fromIndex: 0 });

        memLength.push(participantIDs.length - i++);
memLength.sort((a, b) => a - b);

      (typeof threadData.customJoin == "undefined") ? msg = "Hello {uName}\nWelcome to\n{threadName}\nyou're the {soThanhVien}th member on this group please enjoy" : msg = threadData.customJoin;
      msg = msg
      .replace(/\{uName}/g, nameArray.join(', '))
      .replace(/\{type}/g, (memLength.length > 1) ?  'you' : 'Friend')
      .replace(/\{soThanhVien}/g, memLength.join(', '))
      .replace(/\{threadName}/g, threadName);			

      var link = [
"https://i.imgur.com/pa2ZWhB.jpg",
"https://i.imgur.com/VaA0N6G.jpg",
"https://i.imgur.com/E49ptBn.jpg",
"https://i.imgur.com/VAYWAoS.jpg",
      ];
        var callback = () => api.sendMessage({ body: msg, attachment: fs.createReadStream(__dirname + "/cache/leiamnashJ.jpg"), mentions }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/leiamnashJ.jpg"));
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/leiamnashJ.jpg")).on("close", () => callback());       
            }
})
        }
    }catch (err) {
            return console.log("ERROR: "+err);
    }
  }
        }
