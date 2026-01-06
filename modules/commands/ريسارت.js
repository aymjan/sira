module.exports = {
  name: "ريستارت",
  execute({ api, event, config }) {

    if (!config.ADMINBOT.includes(event.senderID)) {
      return api.sendMessage(
        "😴 روح نام… الريستارت بس لبابا أيمن",
        event.threadID
      );
    }

    api.sendMessage(
      "♻️ حاضر بابا أيمن 💗\nسيرا تشان راح تعيد تشغيل نفسها 🥺🌸",
      event.threadID,
      () => process.exit(1)
    );
  }
};
