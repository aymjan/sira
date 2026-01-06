const sera = require("../../utils/seraStyle");

module.exports = {
  name: "restart",
  description: "إعادة تشغيل البوت (بابا أيمن فقط)",

  execute({ api, event, config }) {
    if (!config.ADMINBOT.includes(event.senderID)) {
      return api.sendMessage(
        sera.notOwner(),
        event.threadID
      );
    }

    api.sendMessage(
      sera.forOwner("♻️ حاضر بابا أيمن… سيرا تشان راح تعيد تشغيل نفسها 🥺"),
      event.threadID,
      () => process.exit(1)
    );
  }
};
