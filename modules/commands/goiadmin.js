module.exports.config = {
  name: "goiadmin",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "61552312071816","61552312071816","61552312071816") {
    var aid = ["61552312071816","61552312071816","61552312071816"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["বস, RAIHAN সিংগেল পোলা তাকে একটা GF খুজে দেও😒🥀", "আমার বস RAIHAN কে আর একবার মেনশন দিলে তোমার নাকের মধ্যে ঘুষি মারমু😡", "বস RAIHAN কে আর একবার মেনশন দিলে খবর আছে তোমার, তোমাকে কিন্তু ঘুষি মারমু RAIHAN কে মেনশন দিবা না😠","বস RAIHAN এখন অনেক বিজি তাকে মেনশন দিয়ে ডিস্টার্ব কইরো না 🥰😍😏"," RAIHAN বস এখন অনেক বিজি তাকে মেনশন দিবা না😡😡😡"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
