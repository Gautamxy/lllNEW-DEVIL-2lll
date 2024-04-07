module.exports.config = {
  name: "imgur",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "AYAN CHOUDHURY",
  description: "Create Image&video link",
  commandCategory: "Image",
  cooldowns: 1,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module🥰.exports.run = async ({ api, event, args }) => {
    const axios = global.nodemodule['axios'];
    const linkanh = event.messageReply.attachments[0].url || args.join(" ");
    if (!linkanh)
        return api.sendMessage('Please give reply to a video/image or enter the image/video link', event.threadID, event.messageID);
    try {

        const allPromise = (await Promise.all(event.messageReply.attachments.map(item => axios.get(`http://nl2-3.deploy.sbs:2011/imgurv2?link=${encodeURIComponent(item.url)}`)))).map(item => item.data.uploaded.image);
        return api.sendMessage(`𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐂𝐫𝐞𝐚𝐭𝐞d 𝐘𝐨𝐮𝐫 𝐈𝐦𝐠𝐮𝐫 𝐏𝐨𝐫𝐭 𝐋𝐢𝐧𝐤✨🥀\n\n` + allPromise.join('"\n"') , event.threadID, event.messageID);
    }
    catch (e) {
        return api.sendMessage(' An error occurred while executing the command', event.threadID, event.messageID);
    }
};
