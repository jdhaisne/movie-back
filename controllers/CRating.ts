const { MRating } = require('../models/MRating')

const hasValidId = (id) => {
    if (!(id || id === 0)) return false
    return true
}

const getAllRatings = async (req: any, res: any) => {
    try {
        const ratings = await MRating.findAll()
        console.log(ratings)
        res.send(ratings)
    } catch (error) {
        console.error("Error occurred:", error);
    res.status(500).send("An error occurred");
    }
}

const getRatingById =async (req: any, res: any) => {
    try {
        const id = parseInt(req.params.id)
        if(!hasValidId(id)) {
            res.status(500).send('An error occurred: ID needed')
            return
        }
        const rating = await MRating.findByPk(id)
        console.log(rating)
        res.send(rating)
    }catch(err) {
        console.error("Error occurred:", err);
        res.status(500).send("An error occurred");
    }
}

const getRatingsByUserId = async (req: any, res: any) =>  {
    try {
        const id = parseInt(req.params.id)
        if(!hasValidId(id)) {
            res.status(500).send('An error occurred: ID needed')
            return
        }
        const ratings = await MRating.findAll({where: {userId: id}})
        console.log(ratings)
        res.send(ratings)
    } catch (err) {
        console.error("Error occurred:", err);
        res.status(500).send("An error occurred");
    }
}

const getRatingsByMovieId = async (req: any, res: any) =>  {
    try {
        const id = parseInt(req.params.id)
        if(!(id || id === 0)) {
            res.status(500).send('An error occurred: ID needed')
            return
        }
        const ratings = await MRating.findAll({where: {movieId: id}})
        console.log(ratings)
        res.send(ratings)
    } catch (err) {
        console.error("Error occurred:", err);
        res.status(500).send("An error occurred");
    }
}

const getMeanRatingByMovieId = async (req: any, res: any) => {
    try {
        const id = parseInt(req.params.id)
        if(!hasValidId(id)) {
            res.status(500).send('An error occurred: ID needed')
            return
        }
        const nbRatings = await MRating.count({
            where: {
                movieId: id
            }
        })
        const sumRatings = await MRating.sum('rating', {where: {movieId: id}})
        const mean = sumRatings/nbRatings
        console.log(mean)
        res.send(mean)
    } catch (err) {
        
    }
}

const getMeanRatingByUserId = async (req: any, res: any) => {
    try {
        const id = parseInt(req.params.id)
        if(!hasValidId(id)) {
            res.status(500).send('An error occurred: ID needed')
            return
        }
        const nbRatings = await MRating.count({
            where: {
                userId: id
            }
        })
        const sumRatings = await MRating.sum('rating', {where: {userId: id}})
        const mean = sumRatings/nbRatings
        console.log(mean)
        res.send(mean)
    } catch (err) {
        
    }
}


const postRating = async (req: any, res: any) => {

}
export const CRating = {
    getAllRatings,
    getRatingById,
    getRatingsByMovieId,
    getRatingsByUserId,
    getMeanRatingByMovieId,
    getMeanRatingByUserId
}