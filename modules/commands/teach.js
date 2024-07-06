const axios = require("axios");

module.exports.config = {
  name: "teach",
  version: "1.0.0",
  permssion: 0,
  credits: "AYAN CHOWDHURY",//don’t change the credits please
  usePrefix: true,
  description: "Teach AI",
  commandCategory: " SIM ✅",
    cooldowns: 2,
};

module.exports.run = async function({ api, event, args }) {
    const { threadID, messageID } = event;
    const input = args.join(" ").split("-");

    if (input.length < 2) {
        if (args.length === 0) {
            return api.sendMessage("Usage: teach [𝗔𝘀𝗸] - [𝙍𝙚𝙥𝙤𝙣𝙨𝙚]", threadID);
        } else if (args.join(" ").includes("-")) {
            return api.sendMessage("Please provide both a question and an answer.", threadID);
        } else {
            return api.sendMessage("Please use '-' character to separate the question and answer.", threadID);
        }
    }

    const teachQuery = input[0].trim();
    const ansQuery = input[1].trim();

    try {
        const response = await axios.get(`http://nl2-4.deploy.sbs:2016/sim?teach=${encodeURIComponent(teachQuery)}&ans=${encodeURIComponent(ansQuery)}`);

        if (response.status >= 200 && response.status < 300) {
            api.sendMessage(`▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n╏ 𝗔𝘀𝗸 ↣ ${ask}\n \n\n╏ 𝙍𝙚𝙥𝙤𝙣𝙨𝙚 ⇉ ${ans}\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ${ask}\nANS: ${ans}`, threadID, messageID);
        } else {
            api.sendMessage("An error occurred while teaching.", threadID);
        }
    } catch (error) {
        console.error(error);
        api.sendMessage("An error occurred while fetching the data.", threadID);
    }
};

