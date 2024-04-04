module.exports.config = {
  name: "namaz",
  version: "1.0.0", 
  hasPermssion: 0,
  credits: "AYAN",// don’t change credits please
  usePrefix: false,
  description: "namaj time",
  commandCategory: "Islamic", 
  usages: "/nz[Dhaka]", 
  cooldowns: 0,
  dependencies: [] 
};

module.exports.run = async function ({ api, event, args }) {
  const axios = require("axios");
  const fs = require("fs-extra");
  const prompt = args.join(" ");

  if (!prompt) return api.sendMessage("[ ! ] Input Your address", event.threadID, event.messageID);


 const RAHAD = `http://api.aladhan.com/v1/timingsByAddress?address=${encodeURIComponent(prompt)}`;

  try {
    const response = await axios.get(RAHAD);
    const timings = response.data.data.timings;


    const RahadApiUrl = "https://videos-api.emonapi.repl.co/video/islam";
    const videoResponse = await axios.get(RahadApiUrl);
    const videoUrl = videoResponse.data.data;

    const videoBuffer = await axios.get(videoUrl, { responseType: 'arraybuffer' });

    fs.writeFileSync(__dirname + "/cache/video.mp4", Buffer.from(videoBuffer.data, "utf-8"));
    const videoReadStream = fs.createReadStream(__dirname + "/cache/video.mp4");

    const msg = `───※ ·AYAN· ※───\n\nprayer time:${prompt}\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n╰┈► 𝗳𝗮𝗷𝗿: ${timings.Fajr}\n\n╰┈► 𝗗𝗵𝘂𝗵𝗿/𝘇𝘂𝗵𝗮𝗿: ${timings.Dhuhr}\n\n╰┈► 𝗮𝘀𝗿: ${timings.Asr}\n\n╰┈► 𝗦𝘂𝗻𝘀𝗲𝘁: ${timings.Sunset}\n\n╰┈► 𝗠𝗮𝗴𝗿𝗶𝗯: ${timings.Maghrib}\n\n╰┈► 𝗶𝘀𝗵𝗮: ${timings.Isha}\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n╰┈► 𝗶𝗺𝘀𝗮𝗸: ${timings.Imsak}\n\n╰┈► 𝗺𝗶𝗱𝗻𝗶𝗴𝗵𝘁: ${timings.Midnight}\n\n───※ ·𝐀𝐒𝐈𝐅 𝐱𝟔𝟗 𝘽𝙊𝙏· ※───`;

    return api.sendMessage(
      {
        body: msg,
        attachment: videoReadStream,
      },
      event.threadID,
      event.messageID
    );
  } catch (error) {

    console.error("API request error:", error);
    return api.sendMessage("[ ! ] An error occurred while fetching data.", event.threadID, event.messageID);
  }
};
