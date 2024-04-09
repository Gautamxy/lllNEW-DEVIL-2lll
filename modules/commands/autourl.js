module.exports.config = {
  name: "AutoDownLink",
  version: "1.0",
  credits: "AYAN CHOWDHURY",
  hasPermission: "",
  usage: "",
  commandCategory: "media",
  cooldown: 5,
};

module.exports.run = async function ({ api, event }) {
  const fs = require("fs-extra");
  const axios = require("axios");
  const cheerio = require("cheerio");

  const threadStates = {};

  const checkLink = function (url) {
    if (url.includes("instagram") || url.includes("facebook") || url.includes("tiktok")) {
      return {
        url: url
      };
    }
    return null;
  };

  const getLink = function (url) {
    return new Promise((resolve, reject) => {
      //... (code for retrieving video URL based on platform)
    });
  };

  const downloadInstagram = function (url, api, event, path) {
                 this.getLink(url, api, event, path).then(res => {
                     axios({
                       method: "GET",
                       url: res,
                       responseType: "arraybuffer"
                     }).then(res => {
                       fs.writeFileSync(path, Buffer.from(res.data, "utf-8"));
                       if (fs.statSync(path).size / 1024 / 1024 > 25) {
                         return api.sendMessage("The file is too large, cannot be sent", event.threadID, () => fs.unlinkSync(path), event.messageID);
                       }
                       api.sendMessage({
                         body: "Successful Download!",
                         attachment: fs.createReadStream(path)
                       }, event.threadID, () => fs.unlinkSync(path), event.messageID);
                     }).catch(err => console.error(err));
                   }).catch(err => console.error(err));
                 }
  };

  const downloadFacebook = function (url, api, event, path) {
    fbDownloader(url).then(res => {
        if (res.success && res.download && res.download.length > 0) {
          const videoUrl = res.download[0].url;
          axios({
            method: "GET",
            url: videoUrl,
            responseType: "stream"
          }).then(res => {
            if (res.headers['content-length'] > 87031808) {
              return api.sendMessage("The file is too large, cannot be sent", event.threadID, () => fs.unlinkSync(path), event.messageID);
            }
            res.data.pipe(fs.createWriteStream(path));
            res.data.on('end', () => {
              api.sendMessage({
                body: "Successful Download!",
                attachment: fs.createReadStream(path)
              }, event.threadID, () => fs.unlinkSync(path), event.messageID);
            });
          }).catch(err => console.error(err));
        } else {
          api.sendMessage("Failed to download Facebook video", event.threadID, event.messageID);
        }
      }).catch(err => console.error(err));
    }
  };

  const downloadTikTok = function (url, api, event, path) {
    //... (code for downloading TikTok video)
  };

  const downLoad = function (url, event) {
    //... (code for selecting and calling appropriate download method)
  };

  const onStart = async function ({ api, event }) {
    //... (code for starting the AutoDownloadLink feature)
  };

  const onChat = async function ({ api, event }) {
    //... (code for handling incoming chat messages and initiating downloads)
  };

  try {
    const threadID = event.threadID;

    if (!threadStates[threadID]) {
      threadStates[threadID] = {};
    }

    if (event.body.toLowerCase().includes('autolink')) {
      api.sendMessage("AutoLink is active.", event.threadID, event.messageID);
    }
  } catch (error) {
    console.error("An error occurred in AutoDownloadLink:", error);
  }

  try {
    if (this.checkLink(event.body)) {
      const { url } = this.checkLink(event.body);
      console.log(`Attempting to download from URL: ${url}`);
      this.downLoad(url, event);
      api.setMessageReaction("💐", event.messageID, (err) => {}, true);
    }
  } catch (error) {
    console.error("An error occurred while processing the link:", error);
  }
};
