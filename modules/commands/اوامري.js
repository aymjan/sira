module.exports = {
  name: "اوامري",
  execute({ api, event, config }) {

    if (!config.ADMINBOT.includes(event.senderID)) {
      return api.sendMessage(
        "🙅‍♀️ هاي الأوامر سرية لبابا أيمن فقط 😌",
        event.threadID
      );
    }

    api.sendMessage(
`🌸 سيرا تشان 🌸

👑 أوامر بابا أيمن:
• ابتايم
• ريستارت
• اطفاء
• اوامري

💗 سيرا تشان بخدمة بابا أيمن دائمًا`,
      event.threadID
    );
  }
};
