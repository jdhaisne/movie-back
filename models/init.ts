import {Movie} from '../models/movie'
import {Topic} from '../models/topic'
import {Comment} from '../models/comment'

const create_tables = async () => {
    await Movie.sync()
    await Topic.sync()
    await Comment.sync()
}

create_tables()