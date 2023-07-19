import {MComment} from '../models/MComment'
import { v4 as uuid4 } from 'uuid';

exports.postComment = async (req:any, res:any) => {
    const comment = MComment.create({
        Message : req.body.message,
        UserId : req.body.userID,
        TopicId : req.body.topicID,
    })
    comment
    .then(() => res.status(201).json({ comment }))
    .catch((error:any) => res.status(400).json({ error}))
}

exports.getAllComments = async (req:any, res:any, next:any) => {
    MComment.findAll()
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
<<<<<<< HEAD:controllers/comment.ts
    Comment.findAll({where: {topicId: req.params.id}})
=======
    MComment.findAll({where: {id: req.params.id}})
>>>>>>> d244daffd09d3ba1dfe8338a367ee82696ec7174:controllers/CComment.ts
    .then((comment:any) => {
        res.status(200).json(comment);
      })
      .catch((error:any) => {
        res.status(400).json({
          error: error,
        });
      });
  }



