import { MMovie } from "../models/MMovie";
import { MTopic } from "../models/MTopic";
import { MComment } from "../models/MComment";
import { MUser } from "./MUser";
import { MLike } from "./MLike";
import { MRating } from "./MRating";

const create_tables = async () => {
  await MMovie.sync();
  await MTopic.sync();
  await MComment.sync();
  await MUser.sync();
  await MLike.sync();
  await MRating.sync();
};

create_tables();

//{force : true } réinitialise la table à 0
