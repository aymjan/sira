const DEV_ID = '61577861540407';

module.exports.config = {
  name: "ريستارت",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "Assistant",
  description: "إعادة تشغيل البوت",
  commandCategory: "admin",
  usages: "ريستارت",
  cooldowns: 3,
  usePrefix: false
};

module.exports.run = async function({ api, event, args }) {
  const { threadID, messageID, senderID } = event;

  // التحقق من صلاحيات المطور
  if (senderID !== DEV_ID) {
    return api.sendMessage("⚠️ هذا الأمر مخصص للمطور فقط!", threadID, messageID);
  }

  try {
    await api.sendMessage("✅ جارٍ إعادة تشغيل البوت...", threadID, messageID);
    process.exit(0);
  } catch (error) {
    return api.sendMessage(`⚠️ حدث خطأ: ${error.message}`, threadID, messageID);
  }
};
