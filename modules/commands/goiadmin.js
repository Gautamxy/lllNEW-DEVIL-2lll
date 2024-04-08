module.exports.config = {
  name: "goiadmin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "AYAN CHOUDHURY",
  description: "bot admin mention",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "61557603311017") {
    var aid = ["61557603311017"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Stop mentioning my creator, he's verry busy..!!😒", "AYAN Boss k mention na diya akta gf khuje deu boss sgl morse..!!😥", "Boss bow niya chipay gese..!!😪","AYAN boss busy ase pore dak diyo..!!😒","boss nai ki bolba amake bolte paro..!!😒"," kicce mention deu kn😒",];
      api.setMessageReaction("💐", event.messageID, (err) => {}, true);
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
                             }
