module.exports = {
  name: "ابتايم",
  execute({ api, event, config }) {

    if (!config.ADMINBOT.includes(event.senderID)) {
      return api.sendMessage(
        "🙅‍♀️ هذا الأمر بس لبابا أيمن 😌💗",
        event.threadID
      );
    }

    const time = process.uptime();
    const h = Math.floor(time / 3600);
    const m = Math.floor((time % 3600) / 60);
    const s = Math.floor(time % 60);

    api.sendMessage(
`🌸 سيرا تشان 🌸

⏳ بابا أيمن
البوت شغال من:
🕰 ${h} ساعة
🕰 ${m} دقيقة
🕰 ${s} ثانية 💗`,
      event.threadID
    );
  }
};
