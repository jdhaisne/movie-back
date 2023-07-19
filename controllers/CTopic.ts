import { MTopic } from "../models/MTopic";
import { v4 as uuid4 } from "uuid";

exports.postTopic = async (req: any, res: any, next: any) => {
  const topic = MTopic.create({
    title: req.body.title,
    subject: req.body.subject,
    movieId: req.params.id,
    type: req.body.type,
  });
  topic
    .then(() => res.status(201).json({ topic }))
    .catch((error: any) => res.status(400).json({ error }));
};

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
