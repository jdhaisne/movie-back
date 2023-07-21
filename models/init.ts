import { MMovie } from "../models/MMovie";
import { MTopic } from "../models/MTopic";
import { MComment } from "../models/MComment";
import { User } from "../models/MUser";
import { MLike } from "../models/MLike";
import { MRating } from "../models/MRating";

const create_tables = async () => {
  await MMovie.sync({ force: true });
  await MTopic.sync({ force: true });
  await MComment.sync({ force: true });
  await User.sync();
  await MLike.sync({ force: true });
  await MRating.sync({ force: true });
};

create_tables();

//{force : true } réinitialise la table à 0
