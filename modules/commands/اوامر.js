module.exports.config = {
  name: "اوامر",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Assistant",
  description: "عرض جميع أوامر البوت بطريقة مزخرفة ودلّوعة",
  commandCategory: "general",
  usages: ".اوامر",
  cooldowns: 5
};

module.exports.run = async function({ api, event, args, commands }) {
  const { threadID } = event;

  // زخرفة وأشكال الإيموجيات
  const header = "🌟✨╔═══❖═══ 🌸 بوت سيرا تشان 🌸 ═══❖═══╗✨🌟\n";
  const footer = "✨🌟╚═════════════════════════════╝🌟✨";

  // قائمة الأوامر مزخرفة
  let msg = header;
  const allCommands = Array.from(commands.values());

  allCommands.forEach((cmd, index) => {
    const num = index + 1;
    const name = cmd.config.name.replace(/_/g, " "); // بدل underscore بمسافة
    const desc = cmd.config.description || "لا يوجد وصف";
    msg += `\n🌸 ${num} . ${name}\n💫 ${desc}\n—͟͟͞͞•`;
  });

  msg += "\n" + footer;

  // إرسال الرسالة
  return api.sendMessage(msg, threadID);
};
