module.exports.config = {
  name: "imgur",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "NAYAN",// cmd convert to MR.AYAN **//
  description: "Create Image&video link",
  commandCategory: "Image",
  cooldowns: 1,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};


module.exports.run = async ({ api, event, args }) => {
    const axios = global.nodemodule['axios'];
  const apis = await axios.get('https://raw.githubusercontent.com/MR-NAYAN-404/NAYAN-BOT/main/api.json')
  const n = apis.data.api
    const linkanh = event.messageReply.attachments[0].url || args.join(" ");
    if (!linkanh)
        return api.sendMessage('[âšœï¸]âžœ Please give feedback or enter the image or vide link', event.threadID, event.messageID);
    try {
      var tpk = `",`;
        const allPromise = (await Promise.all(event.messageReply.attachments.map(item => axios.get(`${n}/imgurv2?link=${encodeURIComponent(item.url)}`)))).map(item => item.data.uploaded.image);
        return api.sendMessage(`𝖲𝗎𝖼𝖼𝖾𝗌𝗌𝖿𝗎𝗅𝗅𝗒 𝖢𝗋𝖾𝖺𝗍𝖾𝖽 𝖸𝗈𝗎𝗋 𝖨𝗆𝗀𝗎𝗋 𝖴𝗋𝗅 𝖫𝗂𝗇𝗄✨🥀\n\n"` + allPromise.join('"\n"') + tpk, event.threadID, event.messageID);
    }
    catch (e) {
        return api.sendMessage('[âšœï¸]âžœ An error occurred while executing the command', event.threadID, event.messageID);
    }
}; 
