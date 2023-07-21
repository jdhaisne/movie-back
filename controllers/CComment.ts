import {MComment} from '../models/MComment'
import { v4 as uuid4 } from 'uuid';

exports.postComment = async (req:any, res:any) => {
    const comment:any = MComment.create({
        message : req.body.message,
        userId : req.body.userId,
        topicId : req.body.topicId,
    })
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

    MComment.findAll({where: {topicId: req.params.id}})
    .then((comment:any) => {
        res.status(200).json(comment);
      })
      .catch((error:any) => {
        res.status(400).json({
          error: error,
        });
      });
  }



