const axios = require('axios');
const fs = require('fs');

module.exports.config = {
  name: "sam",
  version: "3.8",
  hasPermission: 0,
  credits: "AYAN CHOUDHURY", 
  description: "sim",
  commandCategory: "sim simi fun",
  usages: "sam [your query]",
  cooldowns: 3,
};

module.exports.handleEvent = async function ({ api, event }) {
  if (!(event.body.indexOf("janu") === 0 || event.body.indexOf("Janu") === 0)) return;
  const args = event.body.split(/\s+/);
  args.shift();
  const q = args.join(" "); 

  try {
    const response = await axios.get(`https://shaon-all-api-07mo.onrender.com/sim?type=ask&ask=${q}`)


    const formattedResponse = formatFont(response.data.answer);

    api.sendMessage(formattedResponse, event.threadID, event.messageID);


  } catch (error) {
    console.error(error);
    api.sendMessage('হুম জান বলো কি বলবা-!!❤️✌️', event.threadID, event.messageID);
  }
};

module.exports.run = async function({api, event}) {

};

function formatFont(text) {
  const fontMapping = {
     'a': '𝐚', 'b': '𝐛', 'c': '𝐜', '𝐝': '🅓', 'e': '𝐞', 'f': '𝐟', 'g': '𝐠', 'h': '𝐡',
        'i': '𝐢', 'j': '𝐣', 'k': '𝐤', 'l': '𝐥', 'm': '𝐦', 'n': '𝐧', 'o': '𝐨', 'p': '𝐩', 'q': '𝐪',
        'r': '𝐫', 's': '𝐬', 't': '𝐭', 'u': '𝐮', 'v': '𝐯', 'w': '𝐰', 'x': '𝐱', 'y': '𝐲', 'z': '𝐳',
        'A': '𝐀', 'B': '𝐁', 'C': '𝐂', 'D': '𝐃', 'E': '𝐄', 'F': '𝐅', 'G': '𝐆', 'H': '𝐇',
        'I': '𝐈', 'J': '𝐉', 'K': '𝐊', 'L': '𝐋', 'M': '𝐌', 'N': '𝐍', 'O': '𝐎', 'P': '𝐏', 'Q': '𝐐',
        'R': '𝐑', 'S': '𝐒', 'T': '𝐓', 'U': '𝐔', 'V': '𝐕', 'W': '𝐖', 'X': '𝐗', 'Y': '𝐘', 'Z': '𝐙', '0': '𝟎',
        '1': '𝟏', '2': '𝟐', '3': '𝟑', '4': '𝟒', '5': '𝟓', '6': '𝟔', '7': '𝟕', '8': '𝟖', '9': '𝟗',
  };

  let formattedText = "";
  for (const char of text) {
    if (char in fontMapping) {
      formattedText += fontMapping[char];
    } else {
      formattedText += char;
    }
  }

  return formattedText;
}
