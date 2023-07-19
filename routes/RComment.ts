import express from"express";
// import movieCtrl from "../controllers/movie";
const commentCtrl = require("../controllers/CComment")

const router = express.Router();

router.post("/createComment", commentCtrl.postComment);
router.get("/", commentCtrl.getAllComments);
router.get("/:id", commentCtrl.getOneComment);

module.exports = router;