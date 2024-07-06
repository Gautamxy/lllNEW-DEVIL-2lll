module.exports.config = {
	name: "spam",
	version: "1.0.0",
	hasPermission: 0,
	credits: "MR.AYAN",//dont change credits
	usePrefix: true,
	description: "spam",
	commandCategory: "[TXT] [amount]",
	cooldowns: 5,
	envConfig: {
		autoUnsend: false,
		delayUnsend: 2000
	}
};

module.exports.run = function ({ api, event, Users, args }) {
  const permission = ["61552312071816"];
   if (!permission.includes(event.senderID))
   return api.sendMessage("এই command টা শুধু আমার বস রায়হান এর জন্য-⚠️", event.threadID, event.messageID);
  if (args.length !== 2) {
    api.sendMessage(`use this cmd: ${global.config.PREFIX}spam [TXT] [AMOUNT]`, event.threadID);
    return;
  }
  var { threadID, messageID } = event;
  var k = function (k) { api.sendMessage(k, threadID)};

  const msg = args[0];
  const count = args[1];

  //*don't change credits😒

for (i = 0; i < `${count}`; i++) {
 k(`${msg}`);
}

}
