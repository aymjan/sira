module.exports = (api) => {
  const ADMIN_ID = "61577861540407";
  const BOT_NAME = "سيرا تشان";

  function decorateMessage(msg) {
    return `╔═❖═══ ✨ ${BOT_NAME} ✨═══❖═╗\n💖 دادي أيمن 💖: ${msg}\n╚═══════════════════════════╝`;
  }

  api.registerCommand("ريستارت", async (message, args) => {
    if (message.senderID !== ADMIN_ID) {
      return api.sendMessage(decorateMessage("هذا الأمر فقط لبابا أيمن 😏"), message.threadID);
    }

    return api.sendMessage(decorateMessage("جارٍ إعادة تشغيل البوت 🔄💎"), message.threadID);
  });
};
