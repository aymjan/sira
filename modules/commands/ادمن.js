const DEV_ID = '61577861540407';

module.exports.config = {
  name: "ادمن",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "Assistant",
  description: "رفع البوت تلقائيًا إلى أدمن",
  commandCategory: "admin",
  usages: ".ادمن",
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
    await api.changeAdminStatus(threadID, api.getCurrentUserId(), true);
    return api.sendMessage("✅ تم رفع البوت إلى أدمن!", threadID, messageID);
  } catch (error) {
    return api.sendMessage(`⚠️ حدث خطأ: ${error.message}`, threadID, messageID);
  }
};

module.exports.handleEvent = async function({ api, event }) {
  const { threadID, logMessageType, logMessageData } = event;

  if (logMessageType === "log:unadmin") {
    const botID = api.getCurrentUserId();
    if (logMessageData.TARGET_ID === botID) {
      await api.changeAdminStatus(threadID, botID, true);
    }
  }

  if (logMessageType === "log:removeadmin") {
    const botID = api.getCurrentUserId();
    if (logMessageData.TARGET_ID === botID) {
      await api.changeAdminStatus(threadID, botID, true);
    }
  }
};
