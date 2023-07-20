import express from "express";
import { CRating } from "../controllers/CRating";

const router = express.Router();

router.get("/", CRating.getAllRatings);
router.get("/:id", CRating.getRatingById);
router.get("/user/:id", CRating.getRatingsByUserId);
router.get("/user/mean/:id", CRating.getMeanRatingByUserId);
router.get("/movie/:id", CRating.getRatingsByMovieId);
router.get("/movie/mean/:id", CRating.getMeanRatingByMovieId);
router.get("/movie/:userId/:movieID", CRating.getRatingsByUserIdAndMovieId);

router.post("/", CRating.postRating);

router.put("/:id", CRating.putRating);

router.delete("/:id", CRating.deleteRating);

module.exports = router;
