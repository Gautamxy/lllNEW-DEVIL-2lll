module.exports.config = {
  name: "pp",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Islamick Chat",
  description: "",
  commandCategory: "Tools",
  usages: "",
  cooldowns: 3,
  dependencies: {
      "request": "",
      "fs": ""
  }

};

module.exports.run = async({api,event,args,Users}) => {
  const fs = global.nodemodule["fs-extra"];
  const request = global.nodemodule["request"];
  const threadSetting = global.data.threadData.get(parseInt(event.threadID)) || {};
  const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
   if (args.length == 0) return api.sendMessage(`🔥 COMMAND USING DETAILS 🔥\n\n${prefix}${this.config.name} user - Own Profile Photo\n\n${prefix}${this.config.name} user [ Mention ] - Mentioned Person's Profile Photo\n\n${prefix}${this.config.name} group - Group Profile Photo`, event.threadID, event.messageID);
  if (args[0] == "group") {
         if(args[1]){ let threadInfo = await api.getThreadInfo(args[1]);
         let imgg = threadInfo.imageSrc;
     if(!imgg) api.sendMessage(`✨ Here's The Group Photo ✨\n\n🔥 Name : ${threadInfo.threadName} - ☠️`,event.threadID,event.messageID);
      else var callback = () => api.sendMessage({body:`✨ Here's The Group Photo ✨\n\n🔥 Name : ${threadInfo.threadName} - ☠️`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"), event.messageID); return request(encodeURI(`${threadInfo.imageSrc}`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());

    }

          let threadInfo = await api.getThreadInfo(event.threadID);
          let img = threadInfo.imageSrc;
        if(!img) api.sendMessage(`✨ Here's The Group Photo ✨\n\n🔥 Name : ${threadInfo.threadName} - ☠️`,event.threadID,event.messageID)
        else  var callback = () => api.sendMessage({body:`✨ Here's The Group Photo ✨\n\n🔥 Name : ${threadInfo.threadName} - ☠️`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"), event.messageID);   
    return request(encodeURI(`${threadInfo.imageSrc}`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());

    };

if (args[0] == "user") { 
  if(!args[1]){
  if(event.type == "message_reply") id = event.messageReply.senderID
  else id = event.senderID;
  var name = (await Users.getData(id)).name
  var callback = () => api.sendMessage({body:`✨ Here's Your Profile Photo ✨`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
     return request(encodeURI(`https://graph.facebook.com/${id}/picture?height=750&width=750&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
 }
  else {
  if (args.join().indexOf('@') !== -1){
  var mentions = Object.keys(event.mentions)
  var name = (await Users.getData(mentions)).name
  var callback = () => api.sendMessage({body:`✨ Here's The Profile Photo ✨\n\n👤 User : ${name} - ☠️`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
     return request(encodeURI(`https://graph.facebook.com/${mentions}/picture?height=750&width=750&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
  }
  else {
  var name = (await Users.getData(args[1])).name
  var callback = () => api.sendMessage({body:`✨ Here's The Profile Photo ✨\n\n👤 User : ${name} - ☠️`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
     return request(encodeURI(`https://graph.facebook.com/${args[1]}/picture?height=750&width=750&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
  }
   }
   }
           }
