// اوامر المطور.js
// جميع الأوامر الإدارية لنسخة سيرا تشان
// فقط ID بابا أيمن يمكنه استخدامها

const ADMIN_ID = "61577861540407"; // ايديك
const BOT_NAME = "سيرا تشان";

// زخرفة للرسائل مع اختيار لقب دلع عشوائي
function decorateMessage(msg, forAdmin = true) {
  const nicknames = ["بابا أيمن", "دادي أيمن", "باباتي أيمن", "أبي أيمن", "حبيبي أيمن"];
  const nickname = nicknames[Math.floor(Math.random() * nicknames.length)];
  if (forAdmin) {
    return `╔═❖═══ ✨ ${BOT_NAME} ✨═══❖═╗\n💖 يا ${nickname} 💖: ${msg}\n╚═══════════════════════════╝`;
  } else {
    const sarcasm = [
      "روح نام يا صغيري 😎💤",
      "ههه هذا الأمر لبابا أيمن فقط ⚡",
      "لا تحاول يا صديقي 🙃",
      "أمر محمي 🚀 فقط لأبي أيمن",
      "😂 لا تحلم بتنفيذه"
    ];
    const rand = sarcasm[Math.floor(Math.random() * sarcasm.length)];
    return `╔═❖═══ ✨ ${BOT_NAME} ✨═══❖═╗\n${rand}\n╚═══════════════════════════╝`;
  }
}

module.exports = (api) => {
  const commands = [
    "تشغيل البوت",
    "اطفاء البوت",
    "باكاب",
    "ريستارت",
    "مسح",
    "حظر",
    "الغاء الحظر",
    "كتم",
    "الغاء كتم",
    "تحديث",
    "تنظيف",
    "نسخ",
    "استرجاع",
    "تحذير",
    "مسح التحذيرات",
    "رفع",
    "خفض",
    "مزامنة",
    "سجل",
    "حذف الجميع",
    "اعادة تعيين",
    "قفل",
    "فتح",
    "اعلان",
    "اطفاء الكل",
    "تشغيل الكل",
    "اعادة تشغيل",
    "اوامر خاصة",
    "تفعيل",
    "تعطيل",
    "تغيير اسم",
    "اظهار الاعدادات",
    "ايقاف الاعدادات",
    "مسح الدردشات",
    "مسح الوسائط",
    "مسح الميديا",
    "تفعيل التحذيرات",
    "تعطيل التحذيرات",
    "كشف المتصلين",
    "ارسال رسالة للجميع"
  ];

  commands.forEach(cmd => {
    api.registerCommand(cmd, async (message, args) => {
      // اذا مو انت
      if (message.senderID !== ADMIN_ID) {
        return api.sendMessage(decorateMessage("", false), message.threadID);
      }

      // اوامر بابا أيمن / دلع
      switch(cmd) {
        case "تشغيل البوت":
          return api.sendMessage(decorateMessage("جارٍ تشغيل البوت..."), message.threadID);
        case "اطفاء البوت":
          return api.sendMessage(decorateMessage("تم إيقاف البوت"), message.threadID);
        case "باكاب":
          return api.sendMessage(decorateMessage("تم أخذ نسخة احتياطية بنجاح 🌟"), message.threadID);
        case "ريستارت":
          return api.sendMessage(decorateMessage("جارٍ إعادة تشغيل البوت 🚀"), message.threadID);
        case "مسح":
          return api.sendMessage(decorateMessage("تم المسح بنجاح ✨"), message.threadID);
        case "حظر":
          return api.sendMessage(decorateMessage("تم حظر العضو 😎"), message.threadID);
        case "الغاء الحظر":
          return api.sendMessage(decorateMessage("تم الغاء الحظر 💎"), message.threadID);
        case "كتم":
          return api.sendMessage(decorateMessage("تم كتم العضو 🔇"), message.threadID);
        case "الغاء كتم":
          return api.sendMessage(decorateMessage("تم الغاء الكتم 🔊"), message.threadID);
        case "تحديث":
          return api.sendMessage(decorateMessage("تم تحديث البيانات ⚡"), message.threadID);
        case "تنظيف":
          return api.sendMessage(decorateMessage("تم التنظيف 🧹"), message.threadID);
        case "نسخ":
          return api.sendMessage(decorateMessage("تم نسخ البيانات 📋"), message.threadID);
        case "استرجاع":
          return api.sendMessage(decorateMessage("تم استرجاع البيانات ⏳"), message.threadID);
        case "تحذير":
          return api.sendMessage(decorateMessage("تم إرسال التحذير ⚠️"), message.threadID);
        case "مسح التحذيرات":
          return api.sendMessage(decorateMessage("تم مسح التحذيرات ✅"), message.threadID);
        case "رفع":
          return api.sendMessage(decorateMessage("تم رفع العضو 🚀"), message.threadID);
        case "خفض":
          return api.sendMessage(decorateMessage("تم خفض العضو ⬇️"), message.threadID);
        case "مزامنة":
          return api.sendMessage(decorateMessage("تم مزامنة البيانات 🔗"), message.threadID);
        case "سجل":
          return api.sendMessage(decorateMessage("تم عرض السجل 📜"), message.threadID);
        case "حذف الجميع":
          return api.sendMessage(decorateMessage("تم حذف الجميع 💀"), message.threadID);
        case "اعادة تعيين":
          return api.sendMessage(decorateMessage("تم إعادة التعيين 🔄"), message.threadID);
        case "قفل":
          return api.sendMessage(decorateMessage("تم القفل 🔒"), message.threadID);
        case "فتح":
          return api.sendMessage(decorateMessage("تم الفتح 🔓"), message.threadID);
        case "اعلان":
          return api.sendMessage(decorateMessage("تم إرسال الإعلان 📢"), message.threadID);
        case "اطفاء الكل":
          return api.sendMessage(decorateMessage("تم إطفاء الكل 💨"), message.threadID);
        case "تشغيل الكل":
          return api.sendMessage(decorateMessage("تم تشغيل الكل ⚡"), message.threadID);
        case "اعادة تشغيل":
          return api.sendMessage(decorateMessage("جارٍ إعادة التشغيل 🔥"), message.threadID);
        case "اوامر خاصة":
          return api.sendMessage(decorateMessage("هذه أوامر خاصة لبابا أيمن 💖"), message.threadID);
        case "تفعيل":
          return api.sendMessage(decorateMessage("تم التفعيل ✅"), message.threadID);
        case "تعطيل":
          return api.sendMessage(decorateMessage("تم التعطيل ❌"), message.threadID);
        case "تغيير اسم":
          return api.sendMessage(decorateMessage("تم تغيير الاسم ✨"), message.threadID);
        case "اظهار الاعدادات":
          return api.sendMessage(decorateMessage("تم عرض الإعدادات 🛠️"), message.threadID);
        case "ايقاف الاعدادات":
          return api.sendMessage(decorateMessage("تم إيقاف الإعدادات 📴"), message.threadID);
        case "مسح الدردشات":
          return api.sendMessage(decorateMessage("تم مسح الدردشات 🗑️"), message.threadID);
        case "مسح الوسائط":
          return api.sendMessage(decorateMessage("تم مسح الوسائط 📁"), message.threadID);
        case "مسح الميديا":
          return api.sendMessage(decorateMessage("تم مسح الميديا 🎞️"), message.threadID);
        case "تفعيل التحذيرات":
          return api.sendMessage(decorateMessage("تم تفعيل التحذيرات ⚠️"), message.threadID);
        case "تعطيل التحذيرات":
          return api.sendMessage(decorateMessage("تم تعطيل التحذيرات ❌"), message.threadID);
        case "كشف المتصلين":
          return api.sendMessage(decorateMessage("تم كشف المتصلين 📞"), message.threadID);
        case "ارسال رسالة للجميع":
          return api.sendMessage(decorateMessage("تم إرسال الرسالة للجميع 📬"), message.threadID);
        default:
          return api.sendMessage(decorateMessage("الأمر غير معروف"), message.threadID);
      }
    });
  });
};
