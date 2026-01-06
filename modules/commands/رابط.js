const axios = require("axios");
const FormData = require("form-data");

const DEV_ID = "61577861540407"; // ايديك
const BOT_NAME = "سيرا تشان";
const IMGUR_CLIENT_ID = "YOUR_IMGUR_CLIENT_ID"; // ← مهم

function decorate(msg) {
  return `╔═❖═══ ✨ ${BOT_NAME} ✨═══❖═╗
${msg}
╚═══════════════════════════╝`;
}

module.exports.config = {
  name: "رابط",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Assistant",
  description: "جلب رابط الصورة عبر الرد عليها",
  commandCategory: "tools",
  usages: ".رابط  (رد على صورة)",
  cooldowns: 5,
  usePrefix: true
};

module.exports.run = async function({ api, event }) {
  const { threadID, messageID, senderID, messageReply } = event;

  if (!messageReply || !messageReply.attachments || messageReply.attachments.length === 0) {
    return api.sendMessage(
      decorate("❌ لازم ترد على صورة يا ذكي 😼📸"),
      threadID,
      messageID
    );
  }

  const attachment = messageReply.attachments[0];

  if (attachment.type !== "photo") {
    return api.sendMessage(
      decorate("🙄 هذا مو صورة، سيرا تشان تحب الصور بس"),
      threadID,
      messageID
    );
  }

  try {
    api.sendMessage(
      decorate("⏳ شويّة دلع… أرفع الصورة وأرجع 🎀"),
      threadID
    );

    const imageStream = await axios.get(attachment.url, {
      responseType: "stream"
    });

    const form = new FormData();
    form.append("image", imageStream.data);

    const upload = await axios.post(
      "https://api.imgur.com/3/image",
      form,
      {
        headers: {
          ...form.getHeaders(),
          Authorization: `Client-ID ${IMGUR_CLIENT_ID}`
        }
      }
    );

    const imageLink = upload.data.data.link;

    return api.sendMessage(
      decorate(`💎 تم بنجاح يا عسل 😻\n🔗 رابط الصورة:\n${imageLink}`),
      threadID,
      messageID
    );

  } catch (error) {
    return api.sendMessage(
      decorate("⚠️ صار خطأ… سيرا تشان زعلت شوي 😿"),
      threadID,
      messageID
    );
  }
};
