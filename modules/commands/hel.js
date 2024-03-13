module.exports.config = {
	name: "help2",
	version: "1.0.2",
	hasPermssion: 0,
	credits: "CHAND",
	description: "commands list",
	commandCategory: "system",
	usages: "module name",
	cooldowns: 1,
	envConfig: {
		autoUnsend: false,
		delayUnsend: 300
	}
};

module.exports.languages = {
	"en": {
		"moduleInfo": "『 %1 』𒁍\n%2\n\nཫ༄𒁍Usage: %3\n𒁍❯ Category: %4\n𒁍❯ Waiting time: %5 seconds(s)\n𒁍❯ Permission: %6\n\nModule code by %7",
		"helpList": '[ There are %1 commands on this bot, Use: "%2help nameCommand" to know how to use! ]',
		"user": "User",
        "adminGroup": "Admin group",
        "adminBot": "Admin bot"
	}
};

module.exports.handleEvent = function ({ api, event, getText }) {
	const { commands } = global.client;
	const { threadID, messageID, body } = event;

	if (!body || typeof body == "undefined" || body.indexOf("help") != 0) return;
	const splitBody = body.slice(body.indexOf("help")).trim().split(/\s+/);
	if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const command = commands.get(splitBody[1].toLowerCase());
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
	return api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
}

module.exports. run = function({ api, event, args, getText }) {
  const axios = require("axios");
  const request = require('request');
  const fs = require("fs-extra");
	const { commands } = global.client;
	const { threadID, messageID } = event;
	const command = commands.get((args[0] || "").toLowerCase());
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const { autoUnsend, delayUnsend } = global.configModule[this.config.name];
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
if (args[0] == "all") {
    const command = commands.values();
    var group = [], msg = "";
    for (const commandConfig of command) {
      if (!group.some(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase())) group.push({ group: commandConfig.config.commandCategory.toLowerCase(), cmds: [commandConfig.config.name] });
      else group.find(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase()).cmds.push(commandConfig.config.name);
    }
    group.forEach(commandGroup => msg += `☂︎ ${commandGroup.group.charAt(0).toUpperCase() + commandGroup.group.slice(1)} \n${commandGroup.cmds.join(' • ')}\n\n`);
  
    return axios.get('').then(res => {
    let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
      let admID = "100072727941471";
      
      api.getUserInfo(parseInt(admID), (err, data) => {
      if(err){ return console.log(err)}
     var obj = Object.keys(data);
    var firstname = data[obj].name.replace("@", "");
    let callback = function () {
        api.sendMessage({ body:`Commands list\n\n` + msg + `\nSpamming the bot are strictly prohibited\n\nTotal Commands: ${commands.size}\n\nDeveloper:\n${firstname}`, mentions: [{
                           tag: firstname,
                           id: admID,
                           fromIndex: 0,
                 }],
            attachment: fs.createReadStream(__dirname + `/cache/4712.${ext}`)
        }, event.threadID, (err, info) => {
        fs.unlinkSync(__dirname + `/cache/4712.${ext}`);
        if (autoUnsend == false) {
            setTimeout(() => { 
                return api.unsendMessage(info.messageID);
            }, delayUnsend * 1000);
        }
        else return;
    }, event.messageID);
        }
         request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/4712.${ext}`)).on("close", callback);
     })
      })
};
	if (!command) {
		const arrayInfo = [];
		const page = parseInt(args[0]) || 1;
    const numberOfOnePage = 10000;
    let i = 0;
    let msg = "";
    
    for (var [name, value] of (commands)) {
      name += ``;
      arrayInfo.push(name);
    }

    arrayInfo.sort((a, b) => a.data - b.data);
    
const first = numberOfOnePage * page - numberOfOnePage;
    i = first;
    const helpView = arrayInfo.slice(first, first + numberOfOnePage);

    
    for (let cmds of helpView) msg += `│━━━━━━━━━━━\n│${++i}➥${cmds}\n`;
    
    const siu = ` ╔═════•| 💜 |•═════╗\n 𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐓𝐎 𝐀𝐓𝐅 𝐏𝐑𝐎𝐉𝐄𝐂𝐓\n╚═════•| 💜 |•═════╝\n\n━❮●❯━━━❪💝❫━━━❮●❯━\n\n╭━─━─━≪✠≫━─━─━╮`;
    
 const text = `╰━─━─━≪✠≫━─━─━╯\n\n╭━─━─━≪✠≫━─━─━╮\n│𝐏𝐀𝐆𝐄   (${page}/${Math.ceil(arrayInfo.length/numberOfOnePage)})\n│𝗧𝘆𝗽𝗲: °${prefix}𝗛𝗲𝗹𝗽°\n│𝗧𝗼𝘁𝗮𝗹 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀: ${arrayInfo.length}\n│𝐓𝐎𝐓𝐀𝐋 𝐔𝐒𝐄𝐑 :-  ${global.data.allUserID.length}\n╰━─━─━≪✠≫━─━─━╯\n❤️🧡💛💚💙💜🤎🖤💝❤️🧡💜💙𝐇𝐨𝐰 𝐓𝐨 𝐌𝐚𝐤𝐞 𝐅𝐫𝐞𝐞 𝐓𝐡𝐢𝐬 𝐁𝐨𝐭\n\nhttps://youtube.com/@chandtricker436\n\n𝐏𝐥𝐞𝐚𝐬𝐞 𝐒𝐮𝐛𝐜𝐫𝐢𝐛𝐞 𝐌𝐲 𝐘𝐭\n\nᥬ🥶᭄  ᥬ😳᭄ ᥬ😝᭄  ᥬ🙄᭄ ᥬ😱᭄ ᥬ🤡᭄  ᥬ🥵᭄\n━❮●❯━━━❪💝❫━━━❮●❯━\n┎───────────┑\n ❘  👑  𝐀𝐓𝐅-𝐏𝐑𝐎𝐉𝐄𝐂𝐓-❶ 👑   \n┗───────────┙\n╰━─━─━≪✠≫━─━─━╯ `;
    var link = [
"https://i.imgur.com/jOl6XVg.jpeg" ,
"https://i.imgur.com/x8T8ZNB.jpeg" ,
"https://i.imgur.com/xzZJrOc.jpeg" ,
"https://i.imgur.com/58MMQ02.jpeg" ,
"https://i.imgur.com/1Qantts.jpeg" ,
"https://i.imgur.com/NDeXnj4.jpeg" ,
"https://i.imgur.com/ETnrLCv.jpeg" ,
"https://i.imgur.com/JtSDnEn.jpeg" ,
"https://i.imgur.com/HV2lqTo.jpeg" ,
"https://i.imgur.com/ilHbbN3.jpeg" ,
"https://i.imgur.com/3AQ8PlO.jpeg" ]
     var callback = () => api.sendMessage({ body: siu + "\n" + msg  + text, attachment: fs.createReadStream(__dirname + "/cache/leiamnashel1p.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/leiamnashel1p.jpg"), event.messageID);
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/leiamnashel1p.jpg")).on("close", () => callback());
	} 
const leiamname = getText("moduleInfo", command.config.name, command.config.description, `${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits);

  var link = [ "https://i.imgur.com/jOl6XVg.jpeg" ,
"https://i.imgur.com/x8T8ZNB.jpeg" ,
"https://i.imgur.com/xzZJrOc.jpeg" ,
"https://i.imgur.com/58MMQ02.jpeg" ,
"https://i.imgur.com/1Qantts.jpeg" ,
"https://i.imgur.com/NDeXnj4.jpeg" ,
"https://i.imgur.com/ETnrLCv.jpeg" ,
"https://i.imgur.com/JtSDnEn.jpeg" ,
"https://i.imgur.com/HV2lqTo.jpeg" ,
"https://i.imgur.com/ilHbbN3.jpeg" ,
"https://i.imgur.com/3AQ8PlO.jpeg" ,]
    var callback = () => api.sendMessage({ body: leiamname, attachment: fs.createReadStream(__dirname + "/cache/leiamnashel1p.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/leiamnashel1p.jpg"), event.messageID);
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/leiamnashel1p.jpg")).on("close", () => callback());
};