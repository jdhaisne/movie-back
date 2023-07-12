import { Movie } from "../models/movie";
import { User } from "../models/user";

const create_tables = async () => {
  await Movie.sync(); // equal to CREATE TABLE IF NOT EXISTS
  await User.sync();
};

create_tables();

//{force : true } réinitialise la table à 0
