module.exports.config = {
  name: "bot",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "AYAN CHOUDHURY",
  description: "ňo prefix",
  commandCategory: "bot reply",
  cooldowns: 1,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async function({ api, event, args, Users }) {
    const axios = require("axios");
    const request = require("request");
    const fs = require("fs-extra");
    const prompt = args.join(" ");
    var id = event.senderID;
    var name = await Users.getNameUser(event.senderID);
    var tl = ["বেশি bot bot করলে leave নিবো কিন্তু😒😒 " , "শুনবো না😼তুমি আমাকে প্রেম করাই দাও নাই🥺পচা তুমি🥺" , "Hello,I am sam robot.\n \nHow can i assist you?" , "এতো ডেকো না,প্রেম এ পরে যাবো তো🙈" , "Bolo Babu, তুমি কি আমাকে ভালোবাসো🙁💔" , "হ্যা বলো😒, তোমার জন্য কি করতে পারি😐😑?" , "বলো জানু😇" , "I love you janu🥰bolo go🐱" , "আরে Bolo আমার জান ,কেমন আছো?😚 " , "sam bolo ba bby bole qs koro no pblm akta korlei hoi🙂" , "Hop beda😾,Boss বল boss😼😁" , "bolo bbu🐱" , "kou kou asi🙁" , "Hello i am new Robot🤖,\n \nHow can i assist you" , "hello,i mecatopia Robot\n \nHow can i assist you?" , "Hello i am AYAN ROBOT.\n \nHow can i assist you?" , "Hello,I am rizki robot.\n \nHow can i assist you?" , "Hello,I am only AYAN BOT.\n \nHow can i assist you?" , "হ্যাঁ জানু , এইদিক এ আসো কিস দেই🤭 😘" , "Hello say please" , "hello dear,How are you? " , "Hello janu tou have say please🙃" , "Hello kolixa blo go😇" , "বলো কি বলবা, সবার সামনে বলবা নাকি?🙁" , "hello i am Ayan robot.\n \nHow can i asist you?" , "হা বলো, শুনছি আমি 😌" , "Hello,janu bolo go😇" , "Hmm bolo go pakhi ta amr😇" , "Hello i am chatbot.\n \nHow can i assist you?" , "আমি তো অন্ধ কিছু দেখি না🐸 😎but লেখি📝" , "Hello jan how are you?" , "বলো জানু 🌚" , "bolo go ami suntasi😇","Hello How can i assist you?" , "Hello kolixa bole felo ami answer dimu📝" , " Hello i am AYAN BOT.\n \nHow cn i assist you?" , "helo tell" , "আসসালামু আলাইকুম বলেন আপনার জন্য কি করতে পারি..!😇" , "আমাকে এতো না ডেকে বস AYAN কে একটা গফ দে 🙄" , "hello i am chating king.\n \nHow can i assist you? " ,];
    var rand = tl[Math.floor(Math.random() * tl.length)];
    if (!prompt) return api.sendMessage(`${name},\n ${rand}`, event.threadID, event.messageID);
    const res = await axios.get(`http://nl2-4.deploy.sbs:2016/sim?reply=${prompt}`);
    console.log(res.data);
    const respond = res.data.message;

    return api.sendMessage({
        body: respond
    }, event.threadID, event.messageID);
};
