import {Comment} from '../models/comment'
import { v4 as uuid4 } from 'uuid';

exports.postComment = async (req:any, res:any) => {
    const comment = Comment.create({
        Message : req.body.message,
        Id: uuid4(),
        UserId : req.body.userID,
        TopicId : req.body.topicID,
    })
    comment
    .then(() => res.status(201).json({ comment }))
    .catch((error:any) => res.status(400).json({ error}))
}

exports.getAllComments = async (req:any, res:any, next:any) => {
    Comment.findAll()
    .then((comment:any) => {
        res.status(200).json(comment);
      })
      .catch((error:any) => {
        res.status(400).json({
          error: error,
        });
      });
  }

  exports.getOneComment =  async (req:any, res:any, next:any) => {
    Comment.findAll({where: {topicId: req.params.id}})
    .then((comment:any) => {
        res.status(200).json(comment);
      })
      .catch((error:any) => {
        res.status(400).json({
          error: error,
        });
      });
  }



