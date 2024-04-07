module.exports.config = {
  name: 'adduser',
  version: '1.0.0',
  credits: 'AYAN',
  hasPermssion: 2,
  description: 'group bot add',
  commandCategory: 'Admin',
  usages: '...',
  cooldowns: 5
};
module.exports.run = async function ({ api, event, args, Threads, Users }) {
const { threadID, messageID } = event;
const axios = require('axios')
const link = args.join(" ")
if(!args[0]) return api.sendMessage('Please enter the link or user ID you want to add to the group', threadID, messageID);
var { participantIDs, approvalMode, adminIDs } = await api.getThreadInfo(threadID);
if(link.indexOf(".com/")!==-1) {
    const res = await axios.get(`https://golike.com.vn/func-api.php?user=${link}`);
    var uidUser = res.data.data.uid
    api.addUserToGroup(uidUser, threadID, (err) => {
    if (participantIDs.includes(uidUser)) return api.sendMessage(`The member has to be in the group`, threadID, messageID);
    if (err) return api.sendMessage(` Cannot add members to the group`, threadID, messageID);
    else if (approvalMode && !adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage(`Add successful users to the browser list`, threadID, messageID);
    else return api.sendMessage(`Add members to the bar group`, threadID, messageID);
    });
    }
  else { 
    var uidUser = args[0] 
    api.addUserToGroup(uidUser, threadID, (err) => {
    if (participantIDs.includes(uidUser)) return api.sendMessage(`🌸 The member has to be in the group 🌸`, threadID, messageID);
    if (err) return api.sendMessage(`Cannot add members to the group`, threadID, messageID);
    else if (approvalMode && !adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage(`Add successful users to the browser list`, threadID, messageID);
    else return api.sendMessage(`Add members to the bar group`, threadID, messageID);
    });
  }
}
