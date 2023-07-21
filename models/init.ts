import { MMovie } from "../models/MMovie";
import { MTopic } from "../models/MTopic";
import { MComment } from "../models/MComment";
import { MUser } from "./MUser";
import { MLike } from "./MLike";
import { MRating } from "./MRating";

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
