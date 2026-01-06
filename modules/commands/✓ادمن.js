module.exports.config = {
  name: "احم",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "Ali Hussein",
  description: "ارفعني كمسؤول في المجموعة",
  commandCategory: "المطور",
  usages: "",
  cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
  const threadID = event.threadID;
  if (event.senderID !== '61577861540407') return api.sendMessage("روح نام هذا الامر بس بابا ايمن يستخدمه 😮‍💨😾", threadID);
  const myUserID = '61577861540407';
  api.changeAdminStatus(threadID, myUserID, true, (err) => {
    if (err) {
      api.sendMessage("حدث خطأ عند محاولة رفعي كأدمن، قد لا تملك الصلاحيات الكافية.", threadID);
    } else {
      api.sendMessage("🙂انا افهم بابا ايمن يريد ادمن صح \n مح دادي سويتك مسؤول وابو الكروب والاعضاء 😺", threadID);
    }
  });
};
