import {Movie} from './Movie'

function Movies(props) {
    const {movies = []} = props;

    return <div className="movies">
        {movies.length ? movies.map(movie => {
            return <Movie key={movie.imdbID} {...movie} />
        }) : <h5>error! nothing found</h5> }
    </div>
}

export {Movies}