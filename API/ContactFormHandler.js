const path = require("path");

const Dbpath = path.join(__dirname, "../Data/db.sqlite");
const handleContactForm = {
  postMessages: async (req, res) => {
    res.send({ message: "post message" });
  },
  getMessages: async (req, res) => {
    res.send("get message");
  },
  getMessagesByID: async (req, res) => {
    res.send("get id message");
  },
};

module.exports = handleContactForm;
