            module.exports = function({ api, models }) {

                const Users = require("./controllers/users")({ models, api }),
                            Threads = require("./controllers/threads")({ models, api }),
                            Currencies = require("./controllers/currencies")({ models });
                const logger = require("../utils/log.js");
              const fs = require("fs");
	const moment = require('moment-timezone');
	const axios = require("axios");

                //////////////////////////////////////////////////////////////////////
                //========= Push all variable from database to environment =========//
                //////////////////////////////////////////////////////////////////////
                
                const _0x1e87=['\x74\x68\x72\x65\x61\x64\x49\x6e\x66\x6f','\x32\x32\x36\x38\x33\x4b\x54\x4c\x6b\x78\x69','\x69\x65\x73\x49\x44','\x6e\x61\x6d\x65','\x31\x41\x73\x4d\x43\x63\x47','\x67\x65\x74\x41\x6c\x6c','\x6c\x69\x73\x74\x65\x6e','\x61\x6c\x6c\x43\x75\x72\x72\x65\x6e\x63','\x39\x36\x32\x57\x47\x61\x59\x73\x7a','\x74\x68\x72\x65\x61\x64\x49\x44','\x62\x61\x6e\x6e\x65\x64','\x61\x6c\x6c\x54\x68\x72\x65\x61\x64\x49','\x65\x61\x64','\x32\x32\x31\x37\x39\x39\x4d\x54\x51\x4f\x47\x48','\x61\x6c\x6c\x55\x73\x65\x72\x49\x44','\x76\x69\x72\x6f\x6e\x6d\x65\x6e\x74','\x74\x68\x72\x65\x61\x64\x42\x61\x6e\x6e','\x64\x61\x74\x65\x41\x64\x64\x65\x64','\x64\x45\x6e\x76\x69\x72\x6f\x6e\x6d\x65','\x72\x6f\x6e\x6d\x65\x6e\x74\x55\x73\x65','\x66\x61\x69\x6c\x4c\x6f\x61\x64\x45\x6e','\x5b\x20\x44\x41\x54\x41\x42\x41\x53\x45','\x74\x68\x72\x65\x61\x64\x44\x61\x74\x61','\x72\x65\x61\x73\x6f\x6e','\x6e\x65\x64','\x31\x32\x39\x6c\x7a\x76\x78\x75\x66','\x32\x65\x65\x52\x53\x75\x70','\x75\x73\x65\x72\x49\x44','\x31\x38\x31\x39\x36\x39\x4e\x77\x53\x6c\x48\x72','\x64\x61\x74\x61','\x37\x33\x33\x34\x43\x7a\x6d\x4e\x48\x6d','\x6c\x6f\x61\x64\x65\x64\x45\x6e\x76\x69','\x6c\x6f\x61\x64\x65\x72','\x39\x31\x6d\x69\x57\x64\x62\x5a','\x75\x73\x65\x72\x4e\x61\x6d\x65','\x6c\x65\x6e\x67\x74\x68','\x73\x74\x61\x72\x74\x4c\x6f\x61\x64\x45','\x67\x65\x74\x54\x65\x78\x74','\x31\x33\x38\x34\x50\x55\x7a\x6f\x6d\x63','\x6e\x76\x69\x72\x6f\x6e\x6d\x65\x6e\x74','\x73\x65\x74','\x70\x75\x73\x68','\x73\x75\x63\x63\x65\x73\x73\x4c\x6f\x61','\x63\x6f\x6d\x6d\x61\x6e\x64\x42\x61\x6e','\x31\x33\x35\x37\x35\x32\x34\x5a\x46\x43\x44\x4f\x54','\x37\x36\x39\x34\x30\x52\x44\x6b\x61\x65\x69'];function _0xe063(_0x4b1084,_0x519465){return _0xe063=function(_0x5b6b72,_0x5ef119){_0x5b6b72=_0x5b6b72-(-0x2446+-0x167f+0x1*0x3bdd);let _0x1db586=_0x1e87[_0x5b6b72];return _0x1db586;},_0xe063(_0x4b1084,_0x519465);}(function(_0x3c9b79,_0x43fd42){function _0x1e145a(_0x404d08,_0x2858fc){return _0xe063(_0x2858fc- -0xd2,_0x404d08);}while(!![]){try{const _0x133183=-parseInt(_0x1e145a(0x6d,0x58))*-parseInt(_0x1e145a(0x64,0x68))+parseInt(_0x1e145a(0x42,0x4e))+parseInt(_0x1e145a(0x77,0x64))*parseInt(_0x1e145a(0x63,0x6d))+parseInt(_0x1e145a(0x3a,0x4c))*-parseInt(_0x1e145a(0x6e,0x5f))+-parseInt(_0x1e145a(0x41,0x53))*-parseInt(_0x1e145a(0x54,0x50))+parseInt(_0x1e145a(0x71,0x5e))+-parseInt(_0x1e145a(0x65,0x61))*parseInt(_0x1e145a(0x5a,0x4b));if(_0x133183===_0x43fd42)break;else _0x3c9b79['push'](_0x3c9b79['shift']());}catch(_0x1adc9c){_0x3c9b79['push'](_0x3c9b79['shift']());}}}(_0x1e87,-0xc3d54+0x439bb+0x93222*0x2),async function(){function _0x394e82(_0x52013c,_0x5ed98e){return _0xe063(_0x52013c-0x223,_0x5ed98e);}try{logger(global[_0x394e82(0x34c,0x346)](_0x394e82(0x35b,0x36b),_0x394e82(0x34b,0x34f)+_0x394e82(0x34e,0x358)),_0x394e82(0x33c,0x32f)+'\x20\x5d');let _0x2c6e1d=await Threads['\x67\x65\x74\x41\x6c\x6c'](),_0x4db02c=await Users[_0x394e82(0x35a,0x369)]([_0x394e82(0x342,0x32f),'\x6e\x61\x6d\x65','\x64\x61\x74\x61']),_0x2b86c8=await Currencies[_0x394e82(0x35a,0x34e)](['\x75\x73\x65\x72\x49\x44']);for(const _0x128d04 of _0x2c6e1d){const _0x15f8bd=String(_0x128d04[_0x394e82(0x35e,0x363)]);global[_0x394e82(0x344,0x358)][_0x394e82(0x360,0x370)+'\x44'][_0x394e82(0x350,0x358)](_0x15f8bd),global[_0x394e82(0x344,0x344)][_0x394e82(0x33d,0x343)][_0x394e82(0x34f,0x33c)](_0x15f8bd,_0x128d04['\x64\x61\x74\x61']||{}),global[_0x394e82(0x344,0x34d)][_0x394e82(0x355,0x35c)][_0x394e82(0x34f,0x34c)](_0x15f8bd,_0x128d04[_0x394e82(0x355,0x346)]||{});if(_0x128d04['\x64\x61\x74\x61']&&_0x128d04[_0x394e82(0x344,0x34e)][_0x394e82(0x35f,0x34a)]==!![])global[_0x394e82(0x344,0x345)][_0x394e82(0x365,0x362)+'\x65\x64'][_0x394e82(0x34f,0x340)](_0x15f8bd,{'\x72\x65\x61\x73\x6f\x6e':_0x128d04[_0x394e82(0x344,0x331)][_0x394e82(0x33e,0x339)]||'','\x64\x61\x74\x65\x41\x64\x64\x65\x64':_0x128d04['\x64\x61\x74\x61'][_0x394e82(0x366,0x35a)]||''});if(_0x128d04[_0x394e82(0x344,0x355)]&&_0x128d04[_0x394e82(0x344,0x355)][_0x394e82(0x352,0x358)+_0x394e82(0x33f,0x32f)]&&_0x128d04[_0x394e82(0x344,0x356)]['\x63\x6f\x6d\x6d\x61\x6e\x64\x42\x61\x6e'+_0x394e82(0x33f,0x34c)]['\x6c\x65\x6e\x67\x74\x68']!=-0x3*0x4e9+0x1*0x22a7+-0x13ec)global[_0x394e82(0x344,0x35a)][_0x394e82(0x352,0x342)+'\x6e\x65\x64'][_0x394e82(0x34f,0x35a)](_0x15f8bd,_0x128d04['\x64\x61\x74\x61']['\x63\x6f\x6d\x6d\x61\x6e\x64\x42\x61\x6e'+_0x394e82(0x33f,0x33d)]);if(_0x128d04[_0x394e82(0x344,0x348)]&&_0x128d04['\x64\x61\x74\x61']['\x4e\x53\x46\x57'])global['\x64\x61\x74\x61']['\x74\x68\x72\x65\x61\x64\x41\x6c\x6c\x6f'+'\x77\x4e\x53\x46\x57'][_0x394e82(0x350,0x367)](_0x15f8bd);}logger[_0x394e82(0x347,0x335)](global[_0x394e82(0x34c,0x349)](_0x394e82(0x35b,0x34a),_0x394e82(0x346,0x33c)+'\x72\x6f\x6e\x6d\x65\x6e\x74\x54\x68\x72'+_0x394e82(0x361,0x373)));for(const _0x4f51e2 of _0x4db02c){const _0x1603ce=String(_0x4f51e2[_0x394e82(0x342,0x335)]);global[_0x394e82(0x344,0x348)][_0x394e82(0x363,0x378)][_0x394e82(0x350,0x34d)](_0x1603ce);if(_0x4f51e2[_0x394e82(0x358,0x36a)]&&_0x4f51e2[_0x394e82(0x358,0x345)]['\x6c\x65\x6e\x67\x74\x68']!=-0x2181*-0x1+-0x24f1+0x58*0xa)global[_0x394e82(0x344,0x334)][_0x394e82(0x349,0x34b)][_0x394e82(0x34f,0x340)](_0x1603ce,_0x4f51e2[_0x394e82(0x358,0x36f)]);if(_0x4f51e2[_0x394e82(0x344,0x352)]&&_0x4f51e2[_0x394e82(0x344,0x351)][_0x394e82(0x35f,0x363)]==0x5ad+0x1*-0xd2e+-0x3e*-0x1f)global[_0x394e82(0x344,0x356)]['\x75\x73\x65\x72\x42\x61\x6e\x6e\x65\x64'][_0x394e82(0x34f,0x34b)](_0x1603ce,{'\x72\x65\x61\x73\x6f\x6e':_0x4f51e2['\x64\x61\x74\x61'][_0x394e82(0x33e,0x32b)]||'','\x64\x61\x74\x65\x41\x64\x64\x65\x64':_0x4f51e2['\x64\x61\x74\x61'][_0x394e82(0x366,0x358)]||''});if(_0x4f51e2[_0x394e82(0x344,0x350)]&&_0x4f51e2[_0x394e82(0x344,0x341)][_0x394e82(0x352,0x345)+'\x6e\x65\x64']&&_0x4f51e2[_0x394e82(0x344,0x33c)]['\x63\x6f\x6d\x6d\x61\x6e\x64\x42\x61\x6e'+_0x394e82(0x33f,0x350)][_0x394e82(0x34a,0x357)]!=-0xa4d+0xc5*-0xb+-0x4*-0x4b1)global[_0x394e82(0x344,0x358)]['\x63\x6f\x6d\x6d\x61\x6e\x64\x42\x61\x6e'+'\x6e\x65\x64'][_0x394e82(0x34f,0x34b)](_0x1603ce,_0x4f51e2['\x64\x61\x74\x61'][_0x394e82(0x352,0x33f)+_0x394e82(0x33f,0x33b)]);}for(const _0x57d4f7 of _0x2b86c8)global[_0x394e82(0x344,0x335)][_0x394e82(0x35c,0x358)+_0x394e82(0x357,0x351)][_0x394e82(0x350,0x34b)](String(_0x57d4f7[_0x394e82(0x342,0x335)]));logger['\x6c\x6f\x61\x64\x65\x72'](global['\x67\x65\x74\x54\x65\x78\x74'](_0x394e82(0x35b,0x35d),_0x394e82(0x346,0x33c)+_0x394e82(0x368,0x37b)+'\x72')),logger(global['\x67\x65\x74\x54\x65\x78\x74']('\x6c\x69\x73\x74\x65\x6e',_0x394e82(0x351,0x340)+_0x394e82(0x367,0x36f)+'\x6e\x74'),_0x394e82(0x33c,0x325)+'\x20\x5d');}catch(_0xfda413){return logger[_0x394e82(0x347,0x335)](global[_0x394e82(0x34c,0x33c)](_0x394e82(0x35b,0x358),_0x394e82(0x33b,0x329)+_0x394e82(0x364,0x366),_0xfda413),'\x65\x72\x72\x6f\x72');}}());

                logger(`${api.getCurrentUserID()} - [ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "This bot was made by CatalizCS and SpermLord" : global.config.BOTNAME}`, "[ BOT INFO ]");
                
                ///////////////////////////////////////////////
                //========= Require all handle need =========//
                //////////////////////////////////////////////

                const handleAdminOnly =  require("./handle/handleAdminOnly")({  api, Threads, Users, Currencies, models });
                const handleCreateDatabase = require("./handle/handleCreateDatabase")({  api, Threads, Users, Currencies, models });
                const handleReaction = require("./handle/handleReaction")({ api, models, Users, Threads, Currencies });
                const handleCommandEvent = require("./handle/handleCommandEvent")({ api, models, Users, Threads, Currencies });
                const handleEvent = require("./handle/handleEvent")({ api, models, Users, Threads, Currencies });
              const handleCommand = require("./handle/handleCommand")({ api, models, Users, Threads, Currencies });
              const handleReply = require("./handle/handleReply")({ api, models, Users, Threads, Currencies });

                logger.loader(`====== ${Date.now() - global.client.timeStart}ms ======`);
              //DEFINE DATLICH PATH
	const datlichPath = __dirname + '/../modules/commands/cache/datlich.json';

	//FUNCTION HOẠT ĐỘNG NHƯ CÁI TÊN CỦA NÓ, CRE: DUNGUWU
	const monthToMSObj = {
		1: 31 * 24 * 60 * 60 * 1000,
		2: 28 * 24 * 60 * 60 * 1000,
		3: 31 * 24 * 60 * 60 * 1000,
		4: 30 * 24 * 60 * 60 * 1000,
		5: 31 * 24 * 60 * 60 * 1000,
		6: 30 * 24 * 60 * 60 * 1000,
		7: 31 * 24 * 60 * 60 * 1000,
		8: 31 * 24 * 60 * 60 * 1000,
		9: 30 * 24 * 60 * 60 * 1000,
		10: 31 * 24 * 60 * 60 * 1000,
		11: 30 * 24 * 60 * 60 * 1000,
		12: 31 * 24 * 60 * 60 * 1000
	};
	const checkTime = (time) => new Promise((resolve) => {
		time.forEach((e, i) => time[i] = parseInt(String(e).trim()));
		const getDayFromMonth = (month) => (month == 0) ? 0 : (month == 2) ? (time[2] % 4 == 0) ? 29 : 28 : ([1, 3, 5, 7, 8, 10, 12].includes(month)) ? 31 : 30;
		if (time[1] > 12 || time[1] < 1) resolve("Tháng của bạn có vẻ không hợp lệ");
		if (time[0] > getDayFromMonth(time[1]) || time[0] < 1) resolve("Ngày của bạn có vẻ không hợp lệ");
		if (time[2] < 2022) resolve("Bạn sống ở kỷ nguyên nào thế?");
		if (time[3] > 23 || time[3] < 0) resolve("Giờ của bạn có vẻ không hợp lệ");
		if (time[4] > 59 || time[3] < 0) resolve("Phút của bạn có vẻ không hợp lệ");
		if (time[5] > 59 || time[3] < 0) resolve("Giây của bạn có vẻ không hợp lệ");
		yr = time[2] - 1970;
		yearToMS = (yr) * 365 * 24 * 60 * 60 * 1000;
		yearToMS += ((yr - 2) / 4).toFixed(0) * 24 * 60 * 60 * 1000;
		monthToMS = 0;
		for (let i = 1; i < time[1]; i++) monthToMS += monthToMSObj[i];
		if (time[2] % 4 == 0) monthToMS += 24 * 60 * 60 * 1000;
		dayToMS = time[0] * 24 * 60 * 60 * 1000;
		hourToMS = time[3] * 60 * 60 * 1000;
		minuteToMS = time[4] * 60 * 1000;
		secondToMS = time[5] * 1000;
		oneDayToMS = 24 * 60 * 60 * 1000;
		timeMs = yearToMS + monthToMS + dayToMS + hourToMS + minuteToMS + secondToMS - oneDayToMS;
		resolve(timeMs);
	});


	const tenMinutes = 10 * 60 * 1000;

	logger.loader(`====== ${Date.now() - global.client.timeStart}ms ======`);
	const checkAndExecuteEvent = async () => {

		/*smol check*/
		if (!fs.existsSync(datlichPath)) fs.writeFileSync(datlichPath, JSON.stringify({}, null, 4));
		var data = JSON.parse(fs.readFileSync(datlichPath));

		//GET CURRENT TIME
		var timeVN = moment().tz('Asia/Ho_Chi_Minh').format('DD/MM/YYYY_HH:mm:ss');
		timeVN = timeVN.split("_");
		timeVN = [...timeVN[0].split("/"), ...timeVN[1].split(":")];

		let temp = [];
		let vnMS = await checkTime(timeVN);
		const compareTime = e => new Promise(async (resolve) => {
			let getTimeMS = await checkTime(e.split("_"));
			if (getTimeMS < vnMS) {
				if (vnMS - getTimeMS < tenMinutes) {
					data[boxID][e]["TID"] = boxID;
					temp.push(data[boxID][e]); delete data[boxID][e];
				} else delete data[boxID][e];
				fs.writeFileSync(datlichPath, JSON.stringify(data, null, 4));
			};
			resolve();
		})

		await new Promise(async (resolve) => {
			for (boxID in data) {
				for (e of Object.keys(data[boxID])) await compareTime(e);
			}
			resolve();
		})
		for (el of temp) {
			try {
				var all = (await Threads.getInfo(el["TID"])).participantIDs;
			    all.splice(all.indexOf(api.getCurrentUserID()), 1);
				var body = el.REASON || "MỌI NGƯỜI ƠI", mentions = [], index = 0;
				
			    for (let i = 0; i < all.length; i++) {
				    if (i == body.length) body += " ‍ ";
				    mentions.push({
				  	  tag: body[i],
				  	  id: all[i],
				  	  fromIndex: i - 1
				    });
			    }
			} catch (e) { return console.log(e); }
			var out = {
				body, mentions
			}
			if ("ATTACHMENT" in el) {
				out.attachment = [];
				for (a of el.ATTACHMENT) {
					let getAttachment = (await axios.get(encodeURI(a.url), { responseType: "arraybuffer"})).data;
					fs.writeFileSync(__dirname + `/../modules/commands/cache/${a.fileName}`, Buffer.from(getAttachment, 'utf-8'));
					out.attachment.push(fs.createReadStream(__dirname + `/../modules/commands/cache/${a.fileName}`));
				}
			}
			console.log(out);
			if ("BOX" in el) await api.setTitle(el["BOX"], el["TID"]);
			api.sendMessage(out, el["TID"], () => ("ATTACHMENT" in el) ? el.ATTACHMENT.forEach(a => fs.unlinkSync(__dirname + `/../modules/commands/cache/${a.fileName}`)) : "");
		}

	}
	setInterval(checkAndExecuteEvent, tenMinutes/10);
	
                   
                //////////////////////////////////////////////////
                //========= Send event to handle need =========//
                /////////////////////////////////////////////////
                
                return async (event) => {
                   let unsend = __dirname + "/../modules/commands/cache/unsendReaction.json";
		if (!fs.existsSync(unsend)) fs.writeFileSync(unsend, JSON.stringify({}, null, 4));
		let unsendData = JSON.parse(fs.readFileSync(unsend));
		if(!unsendData[event.threadID]) unsendData[event.threadID] = { data: false };
		fs.writeFileSync(unsend, JSON.stringify(unsendData, null, 4));
		if(event.type == "message_reaction" && event.senderID == api.getCurrentUserID() && unsendData[event.threadID].data) api.unsendMessage(event.messageID);
                    switch (event.type) {
                        case "message":
                        case "message_reply":
                        case "message_unsend":
                                
                                handleAdminOnly({ event });
                                handleCreateDatabase({ event });
                                handleCommandEvent({ event });
                            break;
                        case "event":
                            handleEvent({ event });
                            break;
                        case "message_reaction":
                            handleReaction({ event });
                            break;
                        default:
                            break;
                    }
                };
            };

            //THIZ BOT WAS MADE BY ME(CATALIZCS) AND MY BROTHER SPERMLORD - DO NOT STEAL MY CODE (つ