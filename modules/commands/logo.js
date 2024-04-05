var hiro = "AYAN CHOWDHURY";
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
      "\n1 : silver jewerly", "\n2 : yellow jewerly", "\n3 : shiny metal", "\n4 : purple gem","\n5 : rainbow metal","\n6 : SCI FI logo",
      "\n7 : wood text", "\n8 : bagal text", "\n9 : biscuit text", "\n10 : abstra gold", "\n11 : rusty metal", "\n12 : fruit juice",
      "\n13 : ice cream", "\n14 : marble metal", "\n15 : slabs marble", "\n\nmore logo for : use logov3 list to show list"
    ];
    return api.sendMessage(`All types of logos:\n\n${logoTypes.join(", ")}`, threadID, messageID);
  }

  if (args.length < 2) {
    return api.sendMessage(`Use: logo number <name>\n to see all logo types: logo list`, threadID, messageID);
  }

  let type = args[0].toLowerCase();
  let name = args[1];
  let name2 = args.slice(2).join(" ");
  let pathImg = __dirname + `/cache/${type}_${name}.png`;
  let apiUrl, message;

  switch (type) {
    case "1":
      apiUrl =`https://reset-api.ch9nd.repl.co/api/textpro/46?text=${name}`;
      message = "[silver jewerly] BAPPA BRO :";
      break;
    case "2":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/47?text=${name}`;
      message = "[yellow jewerly] BAPPA BRO :";
      break;
    case "3":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/48?text=${name}`;
      message = "[shiny metal] BAPPA BRO :";
      break;
    case "4":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/49?text=${name}`;
      message = "[purple gem] BAPPA BRO :";
      break;
    case "5":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/50?text=${name}`;
      message = "[rainbow metal] BAPPA BRO :";
      break;
    case "6":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/51?text=${name}`;
      message = "[SCI FI logo] BAPPA BRO :";
      break;
    case "7":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/52?text=${name}`;
      message = "[wood text] BAPPA BRO :";
      break;
    case "8":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/53?text=${name}`;
      message = "[bagal text] BAPPA BRO :";
      break;
    case "9":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/54?text=${name}`;
      message = "[biscuit text] BAPPA BRO :";
      break;
    case "10":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/55?text=${name}`;
      message = "[abstra gold] BAPPA BRO :";
      break;
    case "11":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/56?text=${name}`;
      message = "[rusty metal] BAPPA BRO :";
      break;
    case "12":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/57?text=${name}`;
      message = "[fruit juice] BAPPA BRO :";
      break;
    case "13":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/58?text=${name}`;
      message = "[ice cream] BAPPA BRO :";
      break;
    case "14":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/59?text=${name}`;
      message = "[marble metal] BAPPA BRO :";
      break;
    case "15":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/60?text=${name}`;
      message = "[slabs marble] BAPPA BRO :";
      break;
    default:
      return api.sendMessage(`Invalid logo type! Use: /logo list to show all logo types`, threadID, messageID);
  }

  api.sendMessage("Please wait...", threadID, messageID);
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
