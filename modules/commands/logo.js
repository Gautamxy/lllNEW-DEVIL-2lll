var hiro = "CHAND";
const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");

module.exports.config = {
  name: "logo",
  version: "1.0",
  hasPermssion: 0,
  credits: `${hiro}`,
  description: "Generate logos",
  commandCategory: "logo",
  usages: "logo",
  cooldowns: 2,
};

module.exports.run = async function ({ api, event, args, Users }) {
  let { messageID, senderID, threadID } = event;

  if (args.length === 1 && args[0] === "list") {
    const logoTypes = [
      "★★★★★★★★★★\n𝑨𝒍𝒍 𝒕𝒚𝒑𝒆𝒔 𝒐𝒇 𝒍𝒐𝒈𝒐𝒔:\n\n★★★★★★★★★★\n 1 : 𝑮𝒍𝒐𝒘𝒊𝒏𝒈, \n2 : 𝒄𝒉𝒓𝒐𝒎𝒆𝒍𝒐𝒈𝒐, \n3 : 𝒃𝒍𝒂𝒄𝒌 𝒎𝒆𝒕𝒂𝒍, \n4 : 𝒃𝒍𝒖𝒆𝒕𝒆𝒙𝒕, \n5 : 𝒃𝒍𝒖𝒆𝒎𝒆𝒕𝒂𝒍, \n6 : 𝒉𝒐𝒕 𝒍𝒐𝒈𝒐, \n7 : 𝒄𝒂𝒓𝒃𝒐𝒏, \n8 : 𝒚𝒆𝒍𝒍𝒐𝒘, \n9 : 𝒈𝒐𝒍𝒅𝒆𝒏, \n10 : 𝒃𝒍𝒖𝒆 𝒋𝒆𝒘𝒆𝒓𝒍𝒚, \n11 : 𝒄𝒚𝒂𝒏 𝒋𝒆𝒘𝒆𝒓𝒍𝒚, \n12 : 𝒈𝒓𝒆𝒆𝒏, \n13 : 𝒐𝒓𝒂𝒏𝒈𝒆 𝒋𝒆𝒘𝒆𝒓𝒍𝒚, \n14 : 𝒑𝒖𝒓𝒑𝒍𝒆 𝒋𝒆𝒘𝒆𝒓𝒍𝒚, \n15 : 𝒓𝒆𝒅 𝒋𝒆𝒘𝒆𝒓𝒍𝒚,  \n16 : 𝒔𝒊𝒍𝒗𝒆𝒓 𝒋𝒆𝒘𝒆𝒓𝒍𝒚 ,  \n17 : 𝒚𝒆𝒍𝒍𝒐𝒘 𝒋𝒆𝒘𝒆𝒓𝒍𝒚 ,  \n18 : 𝒔𝒉𝒊𝒏𝒚 𝒎𝒆𝒕𝒂𝒍 ,  \n19 : 𝒑𝒖𝒓𝒑𝒍𝒆 𝒈𝒆𝒎 , \n20 : 𝒓𝒂𝒊𝒏𝒃𝒐𝒘 𝒎𝒆𝒕𝒂𝒍 , \n21 : 𝑺𝑪𝑰 𝑭𝑰 𝒍𝒐𝒈𝒐 , \n22 : 𝒘𝒐𝒐𝒅 𝒕𝒆𝒙𝒕 ,  \n23 : 𝒃𝒂𝒈𝒂𝒍 𝒕𝒆𝒙𝒕 ,  \n24 : 𝒃𝒊𝒔𝒄𝒖𝒊𝒕 𝒕𝒆𝒙𝒕 ,  \n25 : 𝒂𝒃𝒔𝒕𝒓𝒂 𝒈𝒐𝒍𝒅 ,  \n26 : 𝒓𝒖𝒔𝒕𝒚 𝒎𝒆𝒕𝒂𝒍 ,  \n27 : 𝒇𝒓𝒖𝒊𝒕 𝒋𝒖𝒊𝒄𝒆 , \n28 : 𝒊𝒄𝒆 𝒄𝒓𝒆𝒂𝒎 ,  \n29 : 𝒎𝒂𝒓𝒃𝒍𝒆 𝒎𝒆𝒕𝒂𝒍 ,  \n30 : 𝒔𝒍𝒂𝒃𝒔 𝒎𝒂𝒓𝒃𝒍𝒆 \n★★★★★★★★★★\n𝒎𝒐𝒓𝒆 𝒍𝒐𝒈𝒐 𝒄𝒐𝒎𝒊𝒏𝒈 𝒔𝒐𝒐𝒏\n★★★★★★★★★★"
    ];
    return api.sendMessage(`\n\n${logoTypes.join(", ")}`, threadID, messageID);
  }

  if (args.length < 2) {
    return api.sendMessage("●❯────────────❮●   𝗪𝗿𝗼𝗻𝗴 𝗨𝘀𝗲𝗱 ➺ 𝗘𝘅𝗮𝗺𝗣𝗹𝗲   ❞\n\n➥ ❝ $𝗹𝗼𝗴𝗼 1 𝗖𝗛𝗔𝗡𝗗  ❞\n➥ ❝ $𝗹𝗼𝗴𝗼 2 𝗖𝗛𝗔𝗡𝗗  ❞\n➥ ❝ $𝗹𝗼𝗴𝗼 3 𝗖𝗛𝗔𝗡𝗗  ❞\n\n➥ 𝐓𝐨𝐓𝐚𝐥 𝐋𝐨𝐆𝐨𝐬 ❃ ➠ 》30《 ❝ 𝗠𝗼𝗿𝗲 𝗟𝗼𝗴𝗼 ❞  –‣ $𝗟𝗼𝗴𝗼 𝗟𝗶𝘀𝘁 \n●❯────────────❮●", threadID, messageID);
  }

  let type = args[0].toLowerCase();
  let name = args[1];
  let name2 = args.slice(2).join(" ");
  let pathImg = __dirname + `/cache/${type}_${name}.png`;
  let apiUrl, message;

  switch (type) {
    case "1":
      apiUrl =`https://reset-api.ch9nd.repl.co/api/textpro/1?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜\n𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 🪽\n❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "2":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/2?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜\n𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 🪽\n❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "3":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/3?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜\n𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 🪽\n❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "4":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/4?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜\n𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 🪽\n❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "5":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/5?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜\n𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 🪽\n❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "6":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/6?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜\n𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 🪽\n❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "7":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/7?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜\n𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 🪽\n❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "8":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/8?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜\n𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 🪽\n❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "9":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/9?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜\n𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 🪽\n❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "10":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/10?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜\n𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 🪽\n❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "11":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/11?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜\n𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 🪽\n❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "12":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/12?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜\n𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 🪽\n❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "13":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/13?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜\n𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 🪽\n❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "14":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/14?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜\n𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 🪽\n❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "15":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/15?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜\n𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 🪽\n❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
      case "16":
      apiUrl =`https://reset-api.ch9nd.repl.co/api/textpro/16?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜ \n𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 🪽\n🪽❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "17":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/17?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜ \n𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 🪽\n🪽❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "18":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/18?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜ \n𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 🪽\n🪽❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "19":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/19?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜ \n𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 🪽\n❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "20":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/20?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜ \n𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 🪽\n🪽❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "21":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/21?text=${name}`;
      message = " ❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜ \n𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 🪽\n🪽❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "22":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/22?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜ \n𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 🪽\n🪽❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "23":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/23?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜ \n𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 🪽\n🪽❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "24":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/24?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜ \n𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 🪽\n🪽❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "25":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/25?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜ \n𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 🪽\n❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "26":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/26?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜ \n𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 🪽\n🪽❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "27":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/27?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜ \n𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 🪽\n🪽❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "28":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/28?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜ \n𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 🪽\n🪽❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "29":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/29?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜ \n𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 🪽\n🪽❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "30":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/30?text=${name}`;
      message = " ❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜ \n𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 🪽\n🪽❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    default:
      return api.sendMessage(`●❯────────────❮●   𝗪𝗿𝗼𝗻𝗴 𝗨𝘀𝗲𝗱 ➺ 𝗘𝘅𝗮𝗺𝗣𝗹𝗲   ❞\n\n➥ ❝ $𝗹𝗼𝗴𝗼 1 𝗖𝗛𝗔𝗡𝗗  ❞\n➥ ❝ $𝗹𝗼𝗴𝗼 2 𝗖𝗛𝗔𝗡𝗗  ❞\n➥ ❝ $𝗹𝗼𝗴𝗼 3 𝗖𝗛𝗔𝗡𝗗  ❞\n\n➥ 𝐓𝐨𝐓𝐚𝐥 𝐋𝐨𝐆𝐨𝐬 ❃ ➠ 》30《 ❝ 𝗠𝗼𝗿𝗲 𝗟𝗼𝗴𝗼 ❞  –‣ $𝗟𝗼𝗴𝗼𝘃2  \n●❯────────────❮●`, threadID, messageID);
  }

  api.sendMessage("࿇ ══━━━✥◈✥━━━══ ࿇\n➙ 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐢𝐧𝐠 𝐀 𝐋𝐨𝐠𝐨 : ❝𝐏𝐥𝐞𝐚𝐬𝐞 𝐖𝐚𝐢𝐭 ❞,\n࿇ ══━━━✥◈✥━━━══ ࿇", threadID, messageID);
  let response = await axios.get(apiUrl, { responseType: "arraybuffer" });
  let logo = response.data;
  fs.writeFileSync(pathImg, Buffer.from(logo, "utf-8"));
  return api.sendMessage(
    {
      body: message,
      attachment: fs.createReadStream(pathImg),
    },
    threadID,
    () => fs.unlinkSync(pathImg),
    messageID
  );
};
