const DEV_ID = '61577861540407'; // ايديك
const BOT_NAME = "سيرا تشان";

// قائمة الردود الساخرة لأي شخص غير المطور
const funnyReplies = [
  "😂 يا ولد، هذا الأمر مخصص لدادي أيمن!",
  "🙄 روح نام، هذا لباباتي أيمن فقط!",
  "😏 عزيزي، سيرا تشان لا يسمع إلا لبابا أيمن",
  "😴 حاول مرة ثانية؟ هذا للبوت دلع بابا أيمن!",
  "🤭 شوف، هذا لبابا أيمن فقط!",
  "😎 ههه، الأمر محجوز لبابا أيمن",
  "💤 سيرا تشان تتجاهلك، هذا للبوت دلع بابا أيمن",
  "😇 ايش، تحاول؟ هذا للبوت دلع بابا أيمن فقط!",
  "😹 يا لطيف، فقط بابا أيمن يستخدم هذا الأمر",
  "🙃 لا تحزن، سيرا تشان تعمل بس مع بابا أيمن!"
];

// زخرفة الرسائل
function decorateMessage(msg) {
  return `╔═❖═══ ✨ ${BOT_NAME} ✨═══❖═╗\n💖 ${msg} 💖\n╚═══════════════════════════╝`;
}

// دالة اختيار رد عشوائي
function randomReply(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

module.exports.config = {
  name: "ادمن",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "Assistant",
  description: "رفع البوت تلقائيًا إلى أدمن",
  commandCategory: "admin",
  usages: ".ادمن",
  cooldowns: 3,
  usePrefix: true
};

module.exports.run = async function({ api, event, args }) {
  const { threadID, messageID, senderID } = event;

  // التحقق من صلاحيات المطور
  if (senderID !== DEV_ID) {
    return api.sendMessage(decorateMessage(randomReply(funnyReplies)), threadID, messageID);
  }

  try {
    await api.changeAdminStatus(threadID, api.getCurrentUserId(), true);
    return api.sendMessage(decorateMessage("🚀 جاري رفع البوت إلى أدمن... تم بنجاح! 💎"), threadID, messageID);
  } catch (error) {
    return api.sendMessage(decorateMessage(`⚠️ حدث خطأ: ${error.message}`), threadID, messageID);
  }
};

module.exports.handleEvent = async function({ api, event }) {
  const { threadID, logMessageType, logMessageData } = event;
  const botID = api.getCurrentUserId();

  // إعادة رفع البوت إذا تم نزع الأدمن
  if ((logMessageType === "log:unadmin" || logMessageType === "log:removeadmin") &&
      logMessageData.TARGET_ID === botID) {
    try {
      await api.changeAdminStatus(threadID, botID, true);
      await api.sendMessage(decorateMessage("💖 سيرا تشان أعادت نفسها أدمن تلقائيًا! 🚀"), threadID);
    } catch (err) {
      console.log("فشل إعادة الأدمن تلقائيًا:", err);
    }
  }
};

  if (logMessageType === "log:removeadmin") {
    const botID = api.getCurrentUserId();
    if (logMessageData.TARGET_ID === botID) {
      await api.changeAdminStatus(threadID, botID, true);
    }
  }
};
