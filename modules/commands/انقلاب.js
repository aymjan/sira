const DEV_ID = "61577861540407"; // ايديك بابا أيمن
const BOT_ID = "61586019840418"; // ايديك سيرا تشان
const BOT_NAME = "سيرا تشان";

function decorate(msg) {
  return `╔═❖═══ ✨ ${BOT_NAME} ✨═══❖═╗
${msg}
╚═══════════════════════════╝`;
}

module.exports.config = {
 name:" انقلاب ",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "Assistant",
  description: "تنزيل كل الأدمين من المجموعة ما عدا المطور وسيرا تشان",
  commandCategory: "admin",
  usages: ".انقلاب",
  cooldowns: 5,
  usePrefix: true
};

module.exports.run = async function({ api, event }) {
  const { threadID, senderID, messageID } = event;

  if (senderID !== DEV_ID) {
    return api.sendMessage(decorate("روح نام يا بابا أيمن 😼 هذا أمر للمطور فقط"), threadID, messageID);
  }

  try {
    const admins = await api.getThreadAdmins(threadID);

    for (let admin of admins) {
      if (admin.id !== DEV_ID && admin.id !== BOT_ID) {
        await api.changeAdminStatus(threadID, admin.id, false);
      }
    }

    return api.sendMessage(decorate("✅ تم تنزيل كل الأدمين من المجموعة ما عداك أنت وسيرا تشان 😻"), threadID, messageID);

  } catch (error) {
    return api.sendMessage(decorate(`⚠️ حدث خطأ: ${error.message}`), threadID, messageID);
  }
};
