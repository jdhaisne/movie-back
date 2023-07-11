import {Movie} from '../models/movie'

const create_tables = async () => {
    await Movie.sync()
}

create_tables()