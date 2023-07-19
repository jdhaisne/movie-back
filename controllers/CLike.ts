import bodyParser from "body-parser"

const { MLike } = require('../models/MLike')

const hasValidId = (id: any) => {
    if (!(id || id === 0)) return false
    return true
}

 const getAllLikes = async (req: any, res: any) => {
    try {
        const likes = await MLike.findAll()
        console.log(likes)
        res.send(likes)
    } catch (error) {
        console.error("Error occurred:", error);
    res.status(500).send("An error occurred");
    }
}

const getLikeById =async (req: any, res: any) => {
    try {
        const id = parseInt(req.params.id)
        if(!hasValidId(id)) {
            res.status(500).send('An error occurred: ID needed')
            return
        }
        const like = await MLike.findByPk(id)
        console.log(like)
        res.send(like)
    }catch(err) {
        console.error("Error occurred:", err);
        res.status(500).send("An error occurred");
    }
}

const getLikesByUserId = async (req: any, res: any) =>  {
    try {
        const id = parseInt(req.params.id)
        if(!hasValidId(id)) {
            res.status(500).send('An error occurred: ID needed')
            return
        }
        const like = await MLike.findAll({where: {userId: id}})
        console.log(like)
        res.send(like)
    } catch (err) {
        console.error("Error occurred:", err);
        res.status(500).send("An error occurred");
    }
}

const getLikesByMovieId = async (req: any, res: any) =>  {
    try {
        const id = parseInt(req.params.id)
        if(!(id || id === 0)) {
            res.status(500).send('An error occurred: ID needed')
            return
        }
        const like = await MLike.findAll({where: {movieId: id}})
        console.log(like)
        res.send(like)
    } catch (err) {
        console.error("Error occurred:", err);
        res.status(500).send("An error occurred");
    }
}

const getLikeCountByMovieId = async (req: any, res: any) => {
    try {
        const id = parseInt(req.params.id)
        if(!(id || id === 0)) {
            res.status(500).send('An error occurred: ID needed')
            return
        }
        const likeCount = await MLike.count({where: {movieId: id}})
        console.log(likeCount)
        res.send(likeCount)
    } catch (err) {
        console.error("Error occurred:", err);
        res.status(500).send("An error occurred");
    }
}

const postLike = async (req: any, res: any) => {
    console.log(req.body)
    try {
        let like = await MLike.findOrCreate({
                where: {
                    userId: req.body.userId,
                    movieId: req.body.movieId
                },
                defaults: {

                }
        })
        console.log(like)
        res.send(like)
    } catch (err) {
        console.error("Error occurred:", err);
        res.status(500).send("An error occurred");
    }
}

const putLike = async (req: any, res: any) => {
    console.log(req.body)
    try {
        let updatedLike = await MLike.update({rating: req.body.rating}, {
            where: {
                userId: req.body.userId,
                movieId: req.body.movieId
            }
        })
        console.log(updatedLike)
        res.send(updatedLike)
    } catch (err) {
        console.error("Error occurred:", err);
        res.status(500).send("An error occurred");
    }
}

const deleteLike = async (req: any, res: any) => {
    console.log(req.body)
    try {
        let deletedLike = await MLike.delete({
            where: {
                id: req.body.id
            }
        })
        console.log(deletedLike)
        res.send(deletedLike)
    } catch (err) {
        console.error("Error occurred:", err);
        res.status(500).send("An error occurred");
    }
}

export const CLike = {
    getAllLikes,
    getLikeById,
    getLikesByMovieId, 
    getLikeCountByMovieId,
    getLikesByUserId,
    
    postLike,
    putLike,
    deleteLike,

}