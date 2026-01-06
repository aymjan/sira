
const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");

module.exports.config = {
  name: "المطور",
  version: "2.0.1",
  hasPermssion: 0,
  credits: "SOMI",
  description: "معلومات مطور البوت ✨",
  commandCategory: "معلومات",
  usages: "المطور",
  cooldowns: 5
};

module.exports.run = async function ({ api, event }) {
  const { threadID } = event;

  const imgPath = path.join(__dirname, "cache", "developer.jpg");
  const imgURL = "https://i.ibb.co/Mx3x6c4y/temp-1767664619825.jpg";

  try {
    const res = await axios.get(imgURL, { responseType: "arraybuffer" });
    fs.writeFileSync(imgPath, Buffer.from(res.data, "utf-8"));

    const msg = `
╭━━━━━━━━━━━━━━━━━━━━━━╮
      👑✨ 𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥 ✨👑
╰━━━━━━━━━━━━━━━━━━━━━━╯

🧑‍💻┃ 𝗡𝗮𝗺𝗲 :
「 ᎯᎽᎷᎯᏁ ᎯᏝᏰᎯᏦᏒᎨ 」

🌍┃ 𝗖𝗼𝘂𝗻𝘁𝗿𝘆 :
「 العراق 🇮🇶 」

🎂┃ 𝗔𝗴𝗲 :
「 18 سنة 」

📸┃ 𝗜𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺 :
「 https://www.instagram.com/x_v_k1?igsh=MWtzdzBpOXp3YWU0 」

📘┃ 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 :
「 https://www.facebook.com/xvk1c 」

╭━━━━━━━━━━━━━━━━━━━━━━╮
 🤖┃ 𝗦𝗘𝗥𝗔 𝗖𝗛𝗔𝗡 𝗕𝗢𝗧
 ⚡┃ 𝗗𝗲𝘃 • 𝗦𝗲𝗰𝘂𝗿𝗶𝘁𝘆 • 𝗚𝗮𝗺𝗲𝘀
 💻┃ 𝗡𝗼𝗱𝗲.𝗝𝗦 • 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁
 🔥┃ 𝗔𝗻𝗶𝗺𝗲 𝗦𝘁𝘆𝗹𝗲
╰━━━━━━━━━━━━━━━━━━━━━━╯
`;

    return api.sendMessage(
      {
        body: msg,
        attachment: fs.createReadStream(imgPath)
      },
      threadID,
      () => fs.unlinkSync(imgPath)
    );

  } catch (e) {
    return api.sendMessage("❌ | حدث خطأ أثناء تحميل صورة المطور", threadID);
  }
};
