module.exports.config = {
  name: "random",
  version: "1.0.",
  hasPermssion: 0,
  credits: "AYAN CHOWDHURY",//dont change credit😠
  description: "rendom video",
  commandCategory: "ayan random",
  usages: "[AYAN random]",
  cooldowns: 0
}; 





module.exports.run = async function({ api, event, args }) {
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
    const { NAYAN } = global.apiNayan;
	const apis = await axios.get('https://raw.githubusercontent.com/MR-NAYAN-404/NAYAN-BOT/main/api.json')
  const n = apis.data.api
    const res = await axios.get(`${n}/video/mixvideo`);
    var data = res.data.url;
    var msg = [];
    let video = `${res.data.url.url}`;
  let name = `${res.data.url.name}`;
    let cp = `${res.data.cp}`
  let ln = `${res.data.length}`

    let videos = (await axios.get(`${video}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/video.mp4", Buffer.from(videos, "utf-8"));
    var allimage = [];
    allimage.push(fs.createReadStream(__dirname + "/cache/video.mp4"));
	
    {
        msg += `${cp}\n\n𝐓𝐨𝐭𝐚𝐥 𝐕𝐢𝐝𝐞𝐨𝐬: [${ln}]\n𝐀𝐝𝐝𝐞𝐝 𝐓𝐡𝐢𝐬 𝐕𝐢𝐝𝐞𝐨 𝐓𝐨 𝐓𝐡𝐞 𝐀𝐩𝐢 𝐁𝐲 [${name}]`
    }
    
    return api.sendMessage({
        body: msg,
        attachment: allimage
    }, event.threadID, event.messageID);
}
