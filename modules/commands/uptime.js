module.exports.config = {
  name: "upt",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "AYAN",
  hide: true,
  description: "Random images by api - upt",
  commandCategory: "administrators",
  cooldowns: 2,
  dependencies: {
    "pidusage": ""
  }
};
  onStart: async function ({ api, event, args }) {
    const uptime = process.uptime();
    const seconds = Math.floor(uptime % 60);
    const minutes = Math.floor((uptime / 60) % 60);
    const hours = Math.floor((uptime / (60 * 60)) % 24);
    const days = Math.floor(uptime / (60 * 60 * 24));
    const uptimeString = `${hours} hours ${minutes} minutes ${seconds} second`;
    api.sendMessage(`Hello Master, the bot has been running for ${uptimeString}.`, event.threadID);
  }
};
