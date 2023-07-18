import  express from "express";
import {CLike} from "../controllers/CLike"

const router = express.Router();

router.get('/', CLike.getAllLikes)
router.get('/:id', CLike.getLikeById)
router.get('/user/:id', CLike.getLikesByUserId)
router.get('/movie/:id', CLike.getLikesByMovieId)

router.post('/', CLike.postLike)

router.put('/:id', CLike.putLike)

router.delete('/:id', CLike.deleteLike)

module.exports = router;