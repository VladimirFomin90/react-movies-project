import React from "react"
import {Movie} from '../components/Movies'

class Main extends React.Component {

    state = {
        movies: [],
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=78584b3c&s=Sons of Anarchy')
    }

    render() {
        const {movies} = this.state;

        return <main className="container content">
            {
                movies.length ? (<Movies movies={this.state.movies} />) : <h4>loading...</h4> 
            }            

            
        </main>
    }
}

export {Main}