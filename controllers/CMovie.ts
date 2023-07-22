import { MMovie } from "../models/MMovie";
import { v4 as uuid4 } from "uuid";

exports.getAllMovies = (req: any, res: any, next: any) => {
  console.log("test");
  MMovie.findAll()
    .then((movies: any) => {
      res.status(200).json(movies);
    })
    .catch((error: any) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.getOneMovie = (req: any, res: any, next: any) => {
  console.log("test");
  MMovie.findAll({ where: { Title: req.params.title } })
    .then((movies: any) => {
      res.status(200).json(movies);
    })
    .catch((error: any) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.postMovie = async (req: any, res: any, next: any) => {
  console.log(req.body);
  const movie = MMovie.create({
    actors: req.body.actors,
    boxOffices: req.body.boxOffices,
    country: req.body.country,
    director: req.body.director,
    genre: req.body.genre,
    language: req.body.language,
    plot: req.body.plot,
    poster: req.body.poster,
    rated: req.body.language,
    // Ratings(tableau d’objet)
    released: req.body.released,
    runTime: req.body.runTime,
    title: req.body.title,
    type: req.body.type,
    year: req.body.year,
    id: uuid4(),
  });
  movie
    .then(() => res.status(201).json({ movie }))
    .catch((error: any) => res.status(400).json({ error }));
};
