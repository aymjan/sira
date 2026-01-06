module.exports = {
  name: "ايقاف",
  execute({ api, event, config }) {

    if (!config.ADMINBOT.includes(event.senderID)) {
      return api.sendMessage(
        "🙅‍♀️ هذا الأمر خاص لبابا أيمن فقط",
        event.threadID
      );
    }

    api.sendMessage(
      "😴 سيرا تشان رايحة تنام… تصبح على خير بابا أيمن 💗",
      event.threadID,
      () => process.exit(0)
    );
  }
};
