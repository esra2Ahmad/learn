const express = require("express");

const router = express.Router();

const contactformH = require("./ContactFormHandler");

router.post("/contact", contactformH.postMessages);
router.get("/contect", contactformH.getMessages);
router.get("/contect/:id", contactformH.getMessagesByID);

module.exports = router;
