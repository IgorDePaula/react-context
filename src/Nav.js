import React, {useContext} from 'react'
import {MovieContext} from "./MovieContext";

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext)
    return (
        <div>
            <h3>Igor</h3>
            <p>Lista de filmes</p>
            <p>Numero de filmes: {movies.length}</p>
        </div>

    )
}

export default Nav;
