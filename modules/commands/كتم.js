module.exports = (api) => {
  const ADMIN_ID = "61577861540407";
  const BOT_NAME = "سيرا تشان";

  function decorateMessage(msg) {
    return `╔═❖═══ ✨ ${BOT_NAME} ✨═══❖═╗\n💖 دادي أيمن 💖: ${msg}\n╚═══════════════════════════╝`;
  }

  api.registerCommand("كتم", async (message, args) => {
    if (message.senderID !== ADMIN_ID) {
      return api.sendMessage(decorateMessage("هذا الأمر فقط لبابا أيمن 😏"), message.threadID);
    }

    return api.sendMessage(decorateMessage("تم كتم العضو 🔇💎"), message.threadID);
  });
};
