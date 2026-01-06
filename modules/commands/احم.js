module.exports.config = {
  name: "احم",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "Assistant",
  description: "رفع نفسك مسؤول للمجموعة",
  commandCategory: "admin",
  usages: ".احم",
  cooldowns: 3,
  usePrefix: true
};

const BOT_NAME = "سيرا تشان";

function decorateMessage(msg) {
  return `╔═❖═══ ✨ ${BOT_NAME} ✨═══❖═╗\n💖 ${msg} 💖\n╚═══════════════════════════╝`;
}

const funnyReplies = [
  "😂 تظن حالك بابا أيمن⁉️ روح نام 😾💢",
  "🙄 ههه، هذا لبابا أيمن فقط!",
  "😹 يا لطيف، سيرا تشان تتجاهلك!",
  "😏 الأمر محجوز لبابا أيمن دلوع!",
  "🤭 حاول مرة ثانية؟ هذا لبابا أيمن فقط!",
  "😴 هذا الأمر مخصص لدادي أيمن!",
  "😇 عزيزي، سيرا تشان تسمع فقط لباباتي أيمن"
];

function randomReply(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

module.exports.run = async function({ api, event, args }) {
  const { threadID, messageID, senderID } = event;

  // التحقق من صلاحيات المطور
  if (senderID !== '61577861540407') {
    return api.sendMessage(decorateMessage(randomReply(funnyReplies)), threadID, messageID);
  }

  try {
    await api.changeAdminStatus(threadID, '61577861540407', true);
    return api.sendMessage(decorateMessage("🚀 بابا أيمن صار مشرف! 😸😻💎"), threadID, messageID);
  } catch (error) {
    return api.sendMessage(decorateMessage(`⚠️ حدث خطأ: ${error.message}`), threadID, messageID);
  }
};
