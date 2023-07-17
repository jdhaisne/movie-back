import { Topic } from "../models/topic";
import { v4 as uuid4 } from "uuid";

exports.postTopic = async (req: any, res: any, next: any) => {
  const topic = Topic.create({
    Title: req.body.title,
    Subject: req.body.subject,
    // Image : req.body.image,
    Id: uuid4(),
    MovieId: req.params.id,
    Type: req.params.type,
  });
  topic
    .then(() => res.status(201).json({ topic }))
    .catch((error: any) => res.status(400).json({ error }));
};

exports.getAllTopics = async (req: any, res: any, next: any) => {
  Topic.findAll()
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
  Topic.findAll({ where: { id: req.params.id } })
    .then((topic: any) => {
      res.status(200).json(topic);
    })
    .catch((error: any) => {
      res.status(400).json({
        error: error,
      });
    });
};
