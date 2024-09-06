module.exports.config = {
  name: "catdp",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "CAT DP",
  commandCategory: "Random-IMG",
  usages: "cat dp",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }

};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/bOQqdIr.jpg","https://i.imgur.com/Umq74II.jpg","https://i.imgur.com/bfEgTqB.jpg","https://i.imgur.com/0PhjK7L.jpg","https://i.imgur.com/GR2KvL7.jpg","https://i.imgur.com/hvwzCww.jpg","https://i.imgur.com/iNBCDOK.jpg","https://i.imgur.com/3BYioFN.jpg","https://i.imgur.com/zejRjZY.jpg","https://i.imgur.com/JnF919x.jpg","https://i.imgur.com/ljkj5L5.jpg","https://i.imgur.com/Ug2sZzn.jpg","https://i.imgur.com/JMhp1m3.jpg","https://i.imgur.com/PBVwm9R.jpg","https://i.imgur.com/9CwFF86.jpg","https://i.imgur.com/fxpITsu.jpg","https://i.imgur.com/iqgmoD9.jpg","https://i.imgur.com/DNRwvd9.jpg","https://i.imgur.com/8EwSfzv.jpg","https://i.imgur.com/fzpSQJ0.jpg","https://i.imgur.com/TTOmdkt.jpg","https://i.imgur.com/DZydVnQ.jpg","https://i.imgur.com/fTBg09P.jpg","https://i.imgur.com/siFOe2A.jpg","https://i.imgur.com/b2gj9OR.jpg","https://i.imgur.com/lFlzOiX.jpg","https://i.imgur.com/uYUYGG4.jpg","https://i.imgur.com/1AGB66N.jpg","https://i.imgur.com/LpFIQ0n.jpg",
     ];
     var callback = () => api.sendMessage({body:`┏━━━━━┓\n     आरिफ-बाबू                    ✧═══•❁😛❁•═══✧\n┗━━━━━┛\n\n♥️`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   }
