module.exports.config = {
  name: "مح",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "Assistant",
  description: "طرد عضو من المجموعة",
  commandCategory: "admin",
  usages: ".مح @اسم العضو",
  cooldowns: 3,
  usePrefix: false
};

module.exports.run = async function({ api, event, args }) {
  const { threadID, messageID, senderID, mentions, messageReply } = event;

  // التحقق من صلاحيات الأدمن
  if (senderID !== '61577861540407' && !global.config.ADMINBOT.includes(senderID) && !global.config.NDH.includes(senderID)) {
    return api.sendMessage("⚠️ هذا الأمر مخصص للأدمن فقط!", threadID, messageID);
  }

  let uid;
  if (mentions && Object.keys(mentions).length > 0) {
    uid = Object.keys(mentions)[0];
  } else if (messageReply) {
    uid = messageReply.senderID;
  } else {
    return api.sendMessage("⚠️ يرجى ذكر اسم العضو أو الرد على رسالته!", threadID, messageID);
  }

  try {
    await api.removeUserFromGroup(uid, threadID);
    return api.sendMessage(`✅ تم طرد العضو بنجاح!`, threadID, messageID);
  } catch (error) {
    return api.sendMessage(`⚠️ حدث خطأ: ${error.message}`, threadID, messageID);
  }
};
