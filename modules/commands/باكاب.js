module.exports = (api) => {
  const ADMIN_ID = "61577861540407";
  const BOT_NAME = "سيرا تشان";

  function decorateMessage(msg) {
    return `╔═❖═══ ✨ ${BOT_NAME} ✨═══❖═╗\n💖 باباتي أيمن 💖: ${msg}\n╚═══════════════════════════╝`;
  }

  api.registerCommand("باكاب", async (message, args) => {
    if (message.senderID !== ADMIN_ID) {
      return api.sendMessage(decorateMessage("هاي للأوامر الخاصة لبابا أيمن 😎"), message.threadID);
    }

    return api.sendMessage(decorateMessage("تم أخذ نسخة احتياطية 💾✨"), message.threadID);
  });
};
