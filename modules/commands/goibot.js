const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["আমি এখন RAIHAN বস এর সাথে বিজি আছি🙄🙄", "ami raihan Boss er sathe busy achi😑😑", "I love you baby meye hole boss raihan er inbox a jaw🙈🙈"," আমি আবাল দের সাথে কথা বলি না -~ok😒😏", "Love you 3000-😍💋💝", "তোর কি আর কোন কাজ নাই শুধু bot bot করতাছস?🤧🥶","আমাকে না ডেকে আমার বস RAIHAN কে একটা GF খুজে দেন🥰🥰", "আমাকে না দেখে রায়হান বস কে একটা জিএফ দেন 🤧😡"," আবাল বললাম না আমাকে আর ডাকবি না😤🤖 ", "শুনবো না 😐 তুমি আমার বস রায়হানের প্রেম করাই দেও নাই তুমি পচা 😐😑,🙂","তোর কথা তোর বাড়ির কেউ শোনে না তো আমি কেন শুনবো 🐸🙂", "Hmm jan ummah😘😘"," আমি কিন্তু এখন রেগে জাচ্ছি😑🤖","আমি এখন রায়হান বসের সাথে বিজি আছি 🙂🖤","মেয়ে হইলে বেশি bot bot না কইরে রায়হান বসকে I love you বলো 🙈আর ছেলে হলে একটা গার্লফ্রেন্ড খুঁজে দাও : নে রায়হান  বসের আইডির লিংক=> https://www.facebook.com/profile.php?id=100078140734060","amake na deke raihan boss ke akta gf den🙈😽","জি তুমি কি আমাকে ডেকেছো 😇🖤🥀","না আমি জনি সিং🤧🤧","এতো ডাকছিস কেন?গালি শুনবি নাকি? 🤬","আমাকে ডাকবি না আমি এখন গিটার বাজাই 😹😹💦🙊","বস রায়হান সিঙ্গেল পোলা তাকে একটা জিএফ দাও🥹🐰👾","বার বার ডাকলে মাথা গরম হয়ে জায় কিন্তু 😣😖","আমাকে ডেকো না,আমি বস রায়হানের সাথে ব্যাস্ত আছি😤😤","বেশি bot Bot করলে leave নিবো কিন্তু😒😒","কি হলো , মিস্টেক করচ্ছিস নাকি🤣"," baby i love you😍😍","Hop beda😾,Boss বল boss😼","বস রায়হান কে একটা সানি লিওনের মতো জিএফ দেও 😍😾"," Bot না জানু,বলো 😌😌"];
 
  var rand = tl[Math.floor(Math.random() * tl.length)]

if ((event.body.toLowerCase() == "রায়হান") || (event.body.toLowerCase() == "raihan")) {
     return api.sendMessage("রায়হান বস এখন বিজি আছে জা বলবেন আমাকে বলেন 🥰🥰", threadID);
   };
   
  if ((event.body.toLowerCase() == "sunny leone") || (event.body.toLowerCase() == "mia khalifa")) {
     return api.sendMessage("খবরদার কেউ এই নাম দরে ডাক দিবানা,,এটা আমার বস রায়হান এর বউ এর নাম..!😠🥰🥀", threadID);
   };

    if ((event.body.toLowerCase() == "জারা") || (event.body.toLowerCase() == "zara")) {
     return api.sendMessage("খবরদার কেউ এই নাম ধরে ডাক দিবা না__ এটা হলো আমার বস রায়হানের কলিজার বেস্ট ফ্রেন্ডের নাম..!🥰🖤🥀", threadID);
   };
   
    if ((event.body.toLowerCase() == "does bot love you") || (event.body.toLowerCase() == "bot loves you")) {
     return api.sendMessage("Hi, Bot loves you more than me, love bot <3", threadID);
   };

   if ((event.body.toLowerCase() == "dog bot") || (event.body.toLowerCase() == "dog bot")) {
     return api.sendMessage("What dog just talked bad about me, want to die😠", threadID);
   };
  
   if ((event.body.toLowerCase() == "dmm bot") || (event.body.toLowerCase() == "dmm bot")) {
     return api.sendMessage("Being disobedient to your biological parents, you say that's a broken person", threadID);
   };

   if ((event.body.toLowerCase() == "cursing cmm") || (event.body.toLowerCase() == "undercover cmm")) {
     return api.sendMessage("Being disobedient to your biological parents, you say that's a broken person", threadID);
   };

  if ((event.body.toLowerCase() == "bsvv nha mng") || (event.body.toLowerCase() == "bsvv nha mng")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "bsvv nha mn") || (event.body.toLowerCase() == "bsvv nha mn")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "btvv nha mng") || (event.body.toLowerCase() == "btvv nha mng")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "hi ae") || (event.body.toLowerCase() == "hi ae")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "hiii") || (event.body.toLowerCase() == "hiii")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "btvv nha mn") || (event.body.toLowerCase() == "btvv nha mn")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };


   if ((event.body.toLowerCase() == "tt go mng") || (event.body.toLowerCase() == "tt go mng")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "let's go") || (event.body.toLowerCase() == "let's go")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "tt mng oi") || (event.body.toLowerCase() == "tt mng oi")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "nn nha mng") || (event.body.toLowerCase() == "nn nha mng")) {
     return api.sendMessage("️Sleep well <3 Wish you all super nice dreams <3", threadID);
   };

   if ((event.body.toLowerCase() == "tt go mn") || (event.body.toLowerCase() == "tt go mn")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "flop over") || (event.body.toLowerCase() == "flop over")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "clmm bot") || (event.body.toLowerCase() == "clmm bot")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "bot cc") || (event.body.toLowerCase() == "bot cc")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "cc bot") || (event.body.toLowerCase() == "cc bot")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "bot dthw too") || (event.body.toLowerCase() == "bot dthw over")) {
     return api.sendMessage("️ that's very commendable hihi :>", threadID);
   };
  
   if ((event.body.toLowerCase() == "dm bot") || (event.body.toLowerCase() == "dm bot")) {
     return api.sendMessage("️Swear something to your dad :), you're a kid but you like to be alive :)", threadID);
   };

   if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody loves me")) {
     return api.sendMessage("️Come on, the bot loves you <3 <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love the admin bot") || (event.body.toLowerCase() == "does the bot love the admin bot")) {
     return api.sendMessage("Yes, love him the most, don't try to rob me", threadID);
   };
   
   if ((event.body.toLowerCase() == "bot im going") || (event.body.toLowerCase() == "bot im di")) {
     return api.sendMessage("Im cc :))) m stop barking for me, but tell me im :>>", threadID);
   };

   if ((event.body.toLowerCase() == "bot go away") || (event.body.toLowerCase() == "bot cut di")) {
     return api.sendMessage("You're gone, your dad's gone, don't make you speak :))))", threadID);
   };

   if ((event.body.toLowerCase() == "What's the bot swearing") || (event.body.toLowerCase() == "bot cursing")) {
     return api.sendMessage("Damn you, shame on hahaha :>>, still asking", threadID);
   };

   if ((event.body.toLowerCase() == "is the bot sad") || (event.body.toLowerCase() == "is the bot sad")) {
     return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("Yes I love you and everyone so much", threadID);
   };

   if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

   if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
     return api.sendMessage("I'm full when I see you eat <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot have a brand") || (event.body.toLowerCase() == "does the bot fall")) {
     return api.sendMessage("Yes <3", threadID);
   };
  
  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
