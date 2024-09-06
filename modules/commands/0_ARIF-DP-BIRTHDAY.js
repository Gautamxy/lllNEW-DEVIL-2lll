module.exports.config = {
  name: "birthdaydp",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "BIRTHDAY DP",
  commandCategory: "Random-IMG",
  usages: "birthday dp",
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
"https://i.imgur.com/iBIHupJ.jpg","https://i.imgur.com/ZR9CyM6.jpg","https://i.imgur.com/LZmYntQ.jpg","https://i.imgur.com/D3B8Fu4.jpg","https://i.imgur.com/bUJWemX.jpg","https://i.imgur.com/DGDPdhc.jpg","https://i.imgur.com/iuvjlpE.jpg","https://i.imgur.com/Pz9Htdb.jpg","https://i.imgur.com/5w6zyYX.jpg","https://i.imgur.com/uOni6Tk.jpg","https://i.imgur.com/XmZmB5l.jpg","https://i.imgur.com/7OyWc6I.jpg","https://i.imgur.com/zxuB8GD.jpg","https://i.imgur.com/H5ovDk0.jpg","https://i.imgur.com/UyBO424.jpg","https://i.imgur.com/Si0awds.jpg","https://i.imgur.com/JMTZTtX.jpg","https://i.imgur.com/tXLl7Vy.jpg","https://i.imgur.com/1skjWjP.jpg","https://i.imgur.com/83Tn9lu.jpg","https://i.imgur.com/IoGyKg8.jpg","https://i.imgur.com/886gN7z.jpg","https://i.imgur.com/rLmR27P.jpg","https://i.imgur.com/p6HxWgb.jpg","https://i.imgur.com/iI9rl21.jpg","https://i.imgur.com/96LeJFv.jpg","https://i.imgur.com/lr50MR0.jpg","https://i.imgur.com/jZ5G9zf.jpg","https://i.imgur.com/Om4sF4q.jpg","https://i.imgur.com/YVUBYX4.jpg","https://i.imgur.com/9EtDip9.jpg","https://i.imgur.com/IdLA25G.jpg","https://i.imgur.com/5Z4rPEn.jpg","https://i.imgur.com/PWoFI1m.jpg","https://i.imgur.com/8zKDNGz.jpg","https://i.imgur.com/lGwRvxW.jpg","https://i.imgur.com/68HZFDs.jpg","https://i.imgur.com/fNslxpv.jpg","https://i.imgur.com/6g9NcEP.jpg","https://i.imgur.com/LT1p79h.jpg","https://i.imgur.com/TlDihUc.jpg",
     ];
     var callback = () => api.sendMessage({body:`┏━━━━━┓\n     आरिफ-बाबू                    ✧═══•❁😛❁•═══✧\n┗━━━━━┛\n\n♥️`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   }
