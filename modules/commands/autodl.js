const axios = require('axios');
const fs = require('fs-extra');
const tinyurl = require('tinyurl');

module.exports.config = {
  name: "autodl",
  version: "1.0.",
  hasPermssion: 0,
  credits: "AYAN",
  description: "Fb Vid Downloader",
  commandCategory: "all download",
  usages: "fb video url",
   usePrefix: true,
  cooldowns: 2
};

module.exports.handleEvent = async function ({ api, event, client, __GLOBAL }) {
let ayan = event.body ? event.body : '';
  try {
if (ayan.startsWith('https://vt.tiktok.com') ||
ayan.startsWith("https://vm.tiktok.com") ||
ayan.startsWith('https://www.facebook.com') || 
ayan.startsWith('https://fb.watch')||
ayan.startsWith('https://www.instagram.com/')|| ayan.startsWith('https://youtu.be/') ||
ayan.startsWith('https://www.instagram.com/p/') || ayan.startsWith('https://pin.it/') || ayan.startsWith('https://youtube.com/') || ayan.startsWith('https://www.capcut.com/') || ayan.startsWith('https://www.threads.net/') || ayan.startsWith('https://twitter.com/') || ayan.startsWith('https://x.com/') || ayan.startsWith('https://l.likee.video/')){
  api.sendMessage("wait baby", event.threadID, event.messageID);
  if (!ayan) {
    api.sendMessage("please put a valid fb video link", event.threadID, event.messageID);
    return;
    }
const aa = await axios.get(`${global.config.API}/ayan/alldl?url=${encodeURIComponent(ayan)}`);
   const bb = aa.data;
   const shortUrl = await tinyurl.shorten(bb.result);
   const MSG = `✅ 🔗 Download Url: ${shortUrl}`;
   let ex;
   let cp;
        if (bb.result.includes('.jpg')){
             ex = ".jpg";
             cp = "Here's your Photo <😘";
        }
        else if (bb.result.includes('.png')){
             ex = ".png";
             cp = "Here's your Photo <😘";
        }
        else if (bb.result.includes('.jpeg')){
             ex = ".jpeg";
             cp = "Here's your Photo <😘";
        }
        else { 
          ex = ".mp4";
          cp = bb.cp;
        }
const path = __dirname + `/cache/video${ex}`;
    const vid = (await axios.get(bb.result, { responseType: "arraybuffer", })).data;
    fs.writeFileSync(path, Buffer.from(vid, 'utf-8'));
    api.sendMessage({
      body: `${cp}\n${MSG}\n 👑👑`,
      attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID)}
if (ayan.startsWith('https://i.imgur.com')){
  const ayan3= dipto.substring(ayan.lastIndexOf('.'));
  const response = await axios.get(ayan, { responseType: 'arraybuffer' });
const filename = __dirname + `/cache/ayan${ayan3}`;
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
