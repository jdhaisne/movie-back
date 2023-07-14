import {Movie} from '../models/movie'
import { v4 as uuid4 } from 'uuid';

  exports.getAllMovies = (req:any, res:any, next:any) => {
    console.log('test')
    Movie.findAll()
      .then((movies:any) => {
        res.status(200).json(movies);
      })
      .catch((error:any) => {
        res.status(400).json({
          error: error,
        });
      });
  };


  exports.getOneMovie = (req:any, res:any, next:any) => {
    console.log('test')
    Movie.findAll({ where: { title: req.params.title } })
      .then((movies:any) => {
        res.status(200).json(movies);
      })
      .catch((error:any) => {
        res.status(400).json({
          error: error,
        });
      });
  };

  
  exports.postMovie = async (req:any, res:any, next:any) => {
    console.log(req.body)
    const movie = Movie.create({
      Actors : req.body.actors,
      BoxOffices :req.body.boxOffices,
      Country : req.body.country,
      Director : req.body.director,
      Genre : req.body.genre,
      Language : req.body.language,
      Plot : req.body.plot,
      Poster :req.body.poster,
      Rated : req.body.language,
        // Ratings(tableau d’objet)
      Released :req.body.released,
      RunTime :req.body.runTime,
      Title :req.body.title,
      Type :req.body.type,
      Year :req.body.year,
      ImdbID: uuid4(),
    });
        movie
        .then(() => res.status(201).json({ movie }))
        .catch((error:any) => res.status(400).json({ error}))
  }
 
