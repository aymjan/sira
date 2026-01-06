
module.exports = {
  name: "مح",
  execute({ api, event, config }) {

    if (!config.ADMINBOT.includes(event.senderID))
      return api.sendMessage("😴 روح نام… بس لبابا أيمن", event.threadID);

    if (!event.mentions) return;

    const uid = Object.keys(event.mentions)[0];

    api.removeUserFromGroup(uid, event.threadID);
    api.sendMessage("🔥 سيرا تشان طردته بأمر بابا أيمن 👑", event.threadID);
  }
};
