const os = require('os');

module.exports.config = {
 name: "upt",
 version: "1.0.2",
 hasPermssion: 0,
 credits: "AYAN",
 description: "uptime",
 commandCategory: "system",
 usePrefix: true,
 cooldowns: 5,
 dependencies: {
	"pidusage": ""
 }
};

function byte2mb(bytes) {
 const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
 let l = 0, n = parseInt(bytes, 10) || 0;
 while (n >= 1024 && ++l) n = n / 1024;
 return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}

function getUptime(uptime) {
 const days = Math.floor(uptime / (3600 * 24));
 const hours = Math.floor((uptime % (3600 * 24)) / 3600);
 const mins = Math.floor((uptime % 3600) / 60);
 const seconds = Math.floor(uptime % 60);
 const cores = `Cores: ${os.cpus().length}`;

 return `Uptime: ${days} days, ${hours} hours, ${mins} minutes, and ${seconds} seconds`;
}

module.exports.languages = {
 "en": {
	"returnResult": "BOT has been working for %1 hour(s) %2 minute(s) %3 second(s).\n\n❖ Total users: %4\n❖ Total Threads: %5\n❖ Cpu usage: %6%\n❖ RAM usage: %7\n❖ Cores: 8\n❖ Ping: %8ms\n❖ Operating System Platform: %9\n❖ System CPU Architecture: %10\n: /home/runner/❰❮❬◦[AYAN]◦❭❯\nNode.js version: v16.7.0"
 }
}

module.exports.run = async ({ api, event, getText }) => {
 const time = process.uptime(),
	hours = Math.floor(time / (60 * 60)),
	minutes = Math.floor((time % (60 * 60)) / 60),
	seconds = Math.floor(time % 60);

 const pidusage = await global.nodemodule["pidusage"](process.pid);

 const osInfo = {
	platform: os.platform(),
	architecture: os.arch()
 };

 const timeStart = Date.now();
 return api.sendMessage("", event.threadID, () => api.sendMessage(getText("returnResult", hours, minutes, seconds, global.data.allUserID.length, global.data.allThreadID.length, pidusage.cpu.toFixed(1), byte2mb(pidusage.memory), Date.now() - timeStart, osInfo.platform, osInfo.architecture), event.threadID, event.messageID));
}
