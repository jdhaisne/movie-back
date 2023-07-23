import express from "express";

const topicCtrl = require("../controllers/CTopic");

const router = express.Router();

router.post("/createTopic/:id", topicCtrl.postTopic);
router.get("/", topicCtrl.getAllTopics);
router.get("/:id", topicCtrl.getOneTopic);
router.get("/movie/:id", topicCtrl.getAllTopicsByMovieId);
// router.post("/createTopic/:movieId/:userId", topicCtrl.postTopicWithUserId);
router.get("/byUser/:userId", topicCtrl.getAllTopicsbyUserId);

module.exports = router;
