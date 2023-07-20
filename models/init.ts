import { MMovie } from "../models/MMovie";
import { MTopic } from "../models/MTopic";
import { MComment } from "../models/MComment";
import { User } from "./MUser";

const create_tables = async () => {
  await MMovie.sync();
  await MTopic.sync();
  await MComment.sync();
  await User.sync();
};

create_tables();

//{force : true } réinitialise la table à 0
