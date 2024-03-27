module.exports.config = {
    name: "pic",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "AYAN",
    description: "Image search",
    commandCategory: "Search",
    usages: "[Text]",
    cooldowns: 0,
};
module.exports.run = async function({ api, event, args }) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const request = require("request");
    const keySearch = args.join(" ");
    if(keySearch.includes("-") == false) return api.sendMessage(' ◈ ━━━━━━ ⸙ ━━━━━━ ◈\n\n𝗬𝗼𝘂 𝗧𝘆𝗽𝗲𝘀 𝗪𝗿𝗼𝗻𝗴 𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗣𝗹𝗲𝗮𝘀𝗲 𝗨𝘀𝗲𝗱 𝗖𝗼𝗿𝗿𝗲𝗰𝘁 \n𝐄𝐗𝐀𝐌𝐏𝐋𝐄 :- ${global.config.PREFIX}Pinterest Bot - 10 \n\n◈ ━━━━━━ ⸙ ━━━━━━ ◈', event.threadID, event.messageID)
    const keySearchs = keySearch.substr(0, keySearch.indexOf('-'))
    const numberSearch = keySearch.split("-").pop() || 10
    const res = await axios.get(`https://pagal.ch4nd.repl.co/pinterest?search=${encodeURIComponent(keySearchs)}`);
    const data = res.data.data;
    var num = 0;
    var imgData = [];
    for (var i = 0; i < parseInt(numberSearch); i++) {
      let path = __dirname + `/cache/${num+=1}.jpg`;
      let getDown = (await axios.get(`${data[i]}`, { responseType: 'arraybuffer' })).data;
      fs.writeFileSync(path, Buffer.from(getDown, 'utf-8'));
      imgData.push(fs.createReadStream(__dirname + `/cache/${num}.jpg`));
    }
    api.sendMessage({
        attachment: imgData,
        body: '━━━━━━ ⸙ ━━━━━━\n' + numberSearch + ' 𝐒𝐄𝐀𝐑𝐂𝐇 𝐑𝐄𝐒𝐔𝐋𝐓𝐒 𝐅𝐎𝐑 𝐊𝐄𝐘𝐖𝐎𝐑𝐃𝐒 : '+ keySearchs + '\n━━━━━━ ⸙ ━━━━━━'
    }, event.threadID, event.messageID)
    for (let ii = 1; ii < parseInt(numberSearch); ii++) {
        fs.unlinkSync(__dirname + `/cache/${ii}.jpg`)
    }
};
