module.exports.config = {
  name: "اوامر",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Assistant",
  description: "عرض جميع أوامر البوت مزخرفة وفاخرة",
  commandCategory: "general",
  usages: ".اوامر",
  cooldowns: 5
};

module.exports.run = async function({ api, event, args, commands }) {
  const { threadID } = event;

  // ✨ زخارف وأشكال
  const header = "🌟✨╔═══❖═══ 🌸 سيرا تشان 🌸 ═══❖═══╗✨🌟\n";
  const footer = "✨🌟╚═════════════════════════════╝🌟✨\n💖 تم عرض جميع الأوامر 💖";

  // تقسيم الأوامر حسب الفئة
  const categories = {
    "عام": [],
    "أدمن": [],
    "دلّوع": [],
    "ألعاب": [],
    "NSFW": [],
    "ميديا": [],
  };

  // تصنيف الأوامر تلقائيًا حسب commandCategory
  commands.forEach(cmd => {
    const category = cmd.config.commandCategory || "عام";
    if (!categories[category]) categories[category] = [];
    categories[category].push(cmd);
  });

  // بناء الرسالة
  let msg = header;

  for (const [cat, cmds] of Object.entries(categories)) {
    if (cmds.length === 0) continue; // تجاهل الفئات الفارغة
    msg += `\n🌸 ✨ ${cat.toUpperCase()} ✨ 🌸\n`;
    cmds.forEach((cmd, index) => {
      const num = index + 1;
      const name = cmd.config.name.replace(/_/g, " ");
      const desc = cmd.config.description || "لا يوجد وصف";
      msg += `💫 ${num} . ${name}\n🎀 ${desc}\n—͟͟͞͞•\n`;
    });
  }

  msg += footer;

  // إرسال الرسالة
  return api.sendMessage(msg, threadID);
};

  msg += "\n" + footer;

  // إرسال الرسالة
  return api.sendMessage(msg, threadID);
};
