module.exports.config = {
  name: "autodl",
  version: "1.0.",
  hasPermssion: 0,
  credits: "AYAN CHOWDHURY",//dont change credit😠
  description: "All  Video Downloader",
  commandCategory: "Downloader",
  usages: "[video link]",
  cooldowns: 0
};

module.exports.handleEvent = async function ({ api, event, client, __GLOBAL }) {
  const axios = require('axios');
const fs = require('fs-extra');
let shaon = event.body ? event.body : '';
  try {
if (shaon.startsWith('https://vt.tiktok.com') ||
    shaon.startsWith("https://vm.tiktok.com") ||
    shaon.startsWith('https://www.facebook.com') || 
    shaon.startsWith('https://fb.watch')||
    shaon.startsWith('https://www.instagram.com/')|| shaon.startsWith('https://youtu.be/') || shaon.startsWith('https://youtube.com/')){
  api.sendMessage("downloading video, please wait...", event.threadID, event.messageID);
  if (!shaon) {
    api.sendMessage("please put a valid video link", event.threadID, event.messageID);
    return;
    }
    const path = __dirname + `/cache/shaonn.mp4`;
    const aa = await axios.get(`https://imran-api-v1.onrender.com/api/download/fb2?url=(url)&apikey=SlI7c9RAS5`);
   const bb = aa.data;
    const vid = (await axios.get(bb.result, { responseType: "arraybuffer", })).data;
    fs.writeFileSync(path, Buffer.from(vid, 'utf-8'));
    api.sendMessage({
      body: `${bb.cp}`,
      attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID)}
if (shaon.startsWith('https://i.imgur.com')){
  const shaon3 = shaon.substring(shaon.lastIndexOf('.'));
  const response = await axios.get(shaon, { responseType: 'arraybuffer' });
const filename = __dirname + `/cache/shaon${shaon3}`;
    fs.writeFileSync(filename, Buffer.from(response.data, 'binary'));
    api.sendMessage({body: `Downloaded from link`,attachment: fs.createReadStream(filename)},event.threadID,
  () => fs.unlinkSync(filename),event.messageID)
}
} catch (e) {
api.sendMessage(`${e}`, event.threadID, event.messageID);
  };
};
module.exports.run = function({ api, event, client, __GLOBAL }) {

}
