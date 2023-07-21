import bodyParser from "body-parser";

const { MRating } = require("../models/MRating");

const hasValidId = (id: any) => {
  if (!(id || id === 0)) return false;
  return true;
};

const getAllRatings = async (req: any, res: any) => {
  try {
    const ratings = await MRating.findAll();
    console.log(ratings);
    res.send(ratings);
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).send("An error occurred");
  }
};

const getRatingById = async (req: any, res: any) => {
  try {
    const id = parseInt(req.params.id);
    if (!hasValidId(id)) {
      res.status(500).send("An error occurred: ID needed");
      return;
    }
    const rating = await MRating.findByPk(id);
    console.log(rating);
    res.send(rating);
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).send("An error occurred");
  }
};

const getRatingsByUserId = async (req: any, res: any) => {
  try {
    const id = parseInt(req.params.id);
    if (!hasValidId(id)) {
      res.status(500).send("An error occurred: ID needed");
      return;
    }
    const ratings = await MRating.findAll({ where: { userId: id } });
    console.log(ratings);
    res.send(ratings);
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).send("An error occurred");
  }
};

const getRatingsByUserIdAndMovieId = async (req: any, res: any) => {
  try {
    const userId = req.params.userId;
    if (!hasValidId(userId)) {
      res.status(500).send("An error occurred: userID needed");
      return;
    }
    const movieID = req.params.movieID;
    if (!hasValidId(userId)) {
      console.log(req.params);
      res.status(500).send("An error occurred: movieID needed");
      return;
    }
    const ratings = await MRating.findOne({
      where: { userId: userId, movieID: movieID },
    });
    console.log(ratings);
    res.send(ratings);
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).send("An error occurred");
  }
};

const getRatingsByMovieId = async (req: any, res: any) => {
  try {
    const id = parseInt(req.params.id);
    if (!(id || id === 0)) {
      res.status(500).send("An error occurred: ID needed");
      return;
    }
    const ratings = await MRating.findAll({ where: { movieId: id } });
    console.log(ratings);
    res.send(ratings);
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).send("An error occurred");
  }
};

const getMeanRatingByMovieId = async (req: any, res: any) => {
  try {
    // const id = parseInt(req.params.id);
    const id = req.params.id;
    if (!hasValidId(id)) {
      console.log(req.params.id);
      res.status(500).send("An error occurred: ID needed");
      return;
    }
    const nbRatings = await MRating.count({
      where: {
        movieId: id,
      },
    });
    console.log(nbRatings);
    const sumRatings = await MRating.sum("rating", { where: { movieId: id } });
    console.log(sumRatings);
    const mean = sumRatings / nbRatings;
    console.log("VOICI LA NOTE MEAN", mean);
    res.json(mean);
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).send("An error occurred");
  }
};

const getMeanRatingByUserId = async (req: any, res: any) => {
  try {
    const id = parseInt(req.params.id);
    if (!hasValidId(id)) {
      res.status(500).send("An error occurred: ID needed");
      return;
    }
    const nbRatings = await MRating.count({
      where: {
        userId: id,
      },
    });
    const sumRatings = await MRating.sum("rating", { where: { userId: id } });
    const mean = sumRatings / nbRatings;
    console.log(mean);
    res.send(mean);
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).send("An error occurred");
  }
};

const postRating = async (req: any, res: any) => {
  console.log(req.body);
  try {
    let rating = await MRating.findOrCreate({
      where: {
        userId: req.body.userId,
        movieID: req.body.movieID,
      },
      defaults: {
        rating: req.body.rating,
      },
    });
    if (!rating.created) {
      rating = await MRating.update(
        { rating: req.body.rating },
        {
          where: {
            userId: req.body.userId,
            movieID: req.body.movieID,
          },
        }
      );
    }
    console.log(rating);
    res.status(201).send("Note recu");
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).send("An error occurred");
  }
};

const putRating = async (req: any, res: any) => {
  console.log(req.body);
  try {
    let updatedRating = await MRating.update(
      { rating: req.body.rating },
      {
        where: {
          userId: req.body.userId,
          movieId: req.body.movieId,
        },
      }
    );
    console.log(updatedRating);
    res.send(updatedRating);
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).send("An error occurred");
  }
};

const deleteRating = async (req: any, res: any) => {
  console.log(req.body);
  try {
    let deletedRating = await MRating.delete({
      where: {
        id: req.body.id,
      },
    });
    console.log(deletedRating);
    res.send(deletedRating);
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).send("An error occurred");
  }
};
export const CRating = {
  getAllRatings,
  getRatingById,
  getRatingsByMovieId,
  getRatingsByUserId,
  getRatingsByUserIdAndMovieId,
  getMeanRatingByMovieId,
  getMeanRatingByUserId,
  postRating,
  putRating,
  deleteRating,
};
