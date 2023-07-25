import { MTopic } from "../models/MTopic";
import {MMovie} from "../models/MMovie"
import { v4 as uuid4 } from "uuid";



exports.postTopic = async (req: any, res: any, next: any) => {
  const topic = MTopic.create({
    title: req.body.title,
    subject: req.body.subject,
    movieId: req.params.id,
    type: req.body.type,
    img : req.body.image,
    userName : req.body.userName,
    userId : req.body.userId
  });
 
  topic
    .then(() => {console.log(topic, "consolelog de topic") ;res.status(201).json({ topic });
      })
    .catch((error: any) => res.status(400).json({ error }));
};

// };

exports.getAllTopics = async (req: any, res: any, next: any) => {
  MTopic.findAll()
    .then((topic: any) => {
      res.status(200).json(topic);
    })
    .catch((error: any) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.getAllTopicsbyUserId = async (req: any, res: any, next: any) => {
  console.log(req.params.userId);
  try {
    const id = parseInt(req.params.userId);
    console.log(id);
    if (!(id || id === 0)) {
      res.status(500).send("An error occurred: ID needed");
      return;
    }
    const topics = await MTopic.findAll({ where: { userId: id } });
    console.log(topics);
    res.send(topics);
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).send("An error occurred");
  }
};

exports.getAllTopicsByMovieId = async (req: any, res: any, next: any) => {
  MTopic.findAll({
    where: {
      movieid: req.params.id,
    },
  })
    .then((topic: any) => {
      res.status(200).json(topic);
    })
    .catch((error: any) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.getOneTopic = async (req: any, res: any, next: any) => {
  MTopic.findAll({ where: { movieId: req.params.id } })
    .then((topic: any) => {
      res.status(200).json(topic);
    })
    .catch((error: any) => {
      res.status(400).json({
        error: error,
      });
    });
};
