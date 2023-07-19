import { Movie } from "../models/movie";
import { Topic } from "../models/topic";
import { Comment } from "../models/comment";
import { User } from "./MUser";
import { MLike } from "./MLike";
import { MRating } from "./MRating";

const create_tables = async () => {
  await Movie.sync();
  await Topic.sync();
  await Comment.sync();
  await User.sync();
  await MLike.sync();
  await MRating.sync();
};

create_tables();

//{force : true } réinitialise la table à 0
