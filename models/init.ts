import { Movie } from "../models/movie";
import { Topic } from "../models/topic";
import { Comment } from "../models/comment";
import { User } from "./MUser";

const create_tables = async () => {
  await Movie.sync();
  await Topic.sync();
  await Comment.sync();
  await User.sync();
};

create_tables();

//{force : true } réinitialise la table à 0
