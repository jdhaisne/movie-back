import {Movie} from '../models/movie'

const create_tables = async () => {
    await Movie.sync({force:true}) // equal to CREATE TABLE IF NOT EXISTS

}

create_tables()