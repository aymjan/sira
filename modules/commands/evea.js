
const sera = require("../../utils/seraStyle");

module.exports = {
  name: "eval",
  description: "تنفيذ كود (خاص لبابا أيمن)",

  execute({ api, event, args, config }) {
    if (!config.ADMINBOT.includes(event.senderID)) {
      return api.sendMessage(sera.notOwner(), event.threadID);
    }

    try {
      const result = eval(args.join(" "));
      api.sendMessage(
        sera.forOwner(`✨ نفذت الكود بنجاح يا بابا أيمن 💞\n\n📤 النتيجة:\n${result}`),
        event.threadID
      );
    } catch (err) {
      api.sendMessage(
        sera.forOwner(`💥 صار خطأ صغير بابا أيمن 🥺\n\n❌ ${err.message}`),
        event.threadID
      );
    }
  }
};
