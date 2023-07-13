import express from "express";

const topicCtrl = require("../controllers/topic")

const router = express.Router();

router.post("/createTopic/:id", topicCtrl.postTopic);
router.get("/", topicCtrl.getAllTopics);
router.get("/:id", topicCtrl.getOneTopic);

module.exports = router;