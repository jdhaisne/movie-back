import { MMovie } from "../models/MMovie";
import { MTopic } from "../models/MTopic";
import { MComment } from "../models/MComment";
import { User } from "../models/MUser";
import { MLike } from "../models/MLike";
import { MRating } from "../models/MRating";

const create_tables = async () => {
  await MMovie.sync();
  await MTopic.sync();
  await MComment.sync();
  await User.sync();
  await MLike.sync();
  await MRating.sync();
};

create_tables();

//{force : true } réinitialise la table à 0
