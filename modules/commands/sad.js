module.exports.config = {
  name: "sad", 
  version: "1.0.0", 
  permission: 0,
  credits: "𝐀𝐒𝐈𝐅 𝐱𝟔𝟗",
  description: "sad video",
  commandCategory: "Random", 
  usages: "sad", 
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "fs":""
  }
};

const videoDATA = "https://videos-api.mcs-badol-bot-007.repl.co/video/sad";

module.exports.onLoad = ({}) => {
  if (!global.nodemodule["fs"].existsSync(__dirname + '/badol')) {
    global.nodemodule["fs"].mkdirSync(__dirname + '/badol');
  }
  global.nodemodule["fs"].readdirSync(__dirname + '/badol').forEach(file => {
    global.nodemodule["fs"].unlinkSync(__dirname + `/badol/${file}`);
  })
}

module.exports.run = async ({ api, event }) => {
  global.nodemodule["axios"]
    .get(videoDATA)
    .then(res => {
      global.nodemodule["axios"]
        .get(encodeURI(res.data.data), { responseType: "arraybuffer" })
        .then(ress => {
          let path = __dirname + `/badol/${Date.now()}.mp4`;
          global.nodemodule["fs"].writeFileSync(path, Buffer.from(ress.data, 'utf-8'));
          api.sendMessage({
            body: "╭•┄┅══𝑨𝑺𝑰𝑭-𝒙𝟔𝟗-𝘽𝙊𝙏══┅┄•╮\n\n━━━━━━━━━━━━━━━━\n\n╰┈►𝙎𝘼𝘿-𝙑𝙄𝘿𝙀𝙊-𝘼𝙋𝙄◄┈╯\n\n━━━━━━━━━━━━━━━━\n\nꗥ̳̳̳̳̳̳̳̳̳̳̿̿̿̿̿̿̿̿̿̿⃟ꗥꔸ𝙈𝙊𝙃𝘼𝙈𝙈𝘼𝘿-𝘽𝘼𝘿𝘼𝙇-𝘾𝙃𝙊𝙒𝘿𝙃𝙐𝙍𝙔ꔸꗥ⃟ꗥ̳̳̳̳̳̳̳̳̳̳̿̿̿̿̿̿̿̿̿̿\n\n╰•┄┅══𝑨𝑺𝑰𝑭-𝐱𝟔𝟗-𝘽𝙊𝙏══┅┄•╯",
            attachment: global.nodemodule["fs"].createReadStream(path)
          }, event.threadID, () => global.nodemodule["fs"].unlinkSync(path), event.messageID);
          return;
        })
        .catch(e => {
          api.sendMessage("Something went wrong...", event.threadID, event.messageID);
          return;
        });
    })
  .catch(e => {
    api.sendMessage("Something went wrong...", event.threadID, event.messageID);
    return;
  });
