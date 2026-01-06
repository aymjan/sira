
module.exports = (api) => {
  const ADMIN_ID = "61577861540407"; // ايديك
  const BOT_NAME = "سيرا تشان";

  function decorateMessage(msg) {
    return `╔═❖═══ ✨ ${BOT_NAME} ✨═══❖═╗\n💖 دادي أيمن 💖: ${msg}\n╚═══════════════════════════╝`;
  }

  api.registerCommand("تشغيل ", async (message, args) => {
    if (message.senderID !== ADMIN_ID) {
      return api.sendMessage(decorateMessage("روح نام هذا لبابا أيمن 😏"), message.threadID);
    }

    return api.sendMessage(decorateMessage("جارٍ تشغيل البوت 🚀💎"), message.threadID);
  });
};
