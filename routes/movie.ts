import express from "express";
// import movieCtrl from "../controllers/movie";
const movieCtrl = require("../controllers/movie");

const router = express.Router();

router.get("/", movieCtrl.getAllMovies);
router.get("/:title", movieCtrl.getOneMovie);
router.post("/createMovie", movieCtrl.postMovie);

module.exports = router;
