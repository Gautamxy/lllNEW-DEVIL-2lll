module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: " AYAN CHOWDHURY",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "being kicked by the administrator";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`ওই ${name} লিভ নিয় না 🥺..আমাকে ছেড়ে কোথায় যাও🥺🥺add দিমু আবার☺️🥀 লিভ নিয় না পিলিজ আমার সাথে কথা বলো..!!😘🍼`, event.threadID)
   } else api.sendMessage(`ওই ${name} লিভ নিয় না 🥺\n\nআমাকে ছেড়ে কোথায় যাও🥺🥺\n\nadd দিমু আবার☺️🥀 লিভ নিয় না পিলিজ\n\nআমার সাথে কথা বলো..!!😘🍼`, event.threadID);
  })
 }
       }
