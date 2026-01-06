module.exports.config = {
  name: "احم",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "Assistant",
  description: "رفع نفسك مسؤول للمجموعة",
  commandCategory: "admin",
  usages: "احم",
  cooldowns: 3,
  usePrefix: false
};

module.exports.run = async function({ api, event, args }) {
  const { threadID, messageID, senderID } = event;

  // التحقق من صلاحيات الأدمن
  if (senderID !== '61577861540407') {
    return api.sendMessage("تظن حالك بابا ايمن⁉️ روح نام 😾💢", threadID, messageID);
  }

  try {
    await api.changeAdminStatus(threadID, '61577861540407', true);
    return api.sendMessage("بابا ايمن يريد يصير مشرف ياااييي😸😻", threadID, messageID);
  } catch (error) {
    return api.sendMessage(`⚠️ حدث خطأ: ${error.message}`, threadID, messageID);
  }
};
