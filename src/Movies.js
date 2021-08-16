import React, { useState } from "react"
//import './Movies.module.scss';
import Spinner from 'react-bootstrap/Spinner'
import styles from './Movies.css'
import MoviesList from "./MoviesList";
export const API_KEY = "a9118a3a";


const Movies = () => {
    const [search, setSearch] = useState('');

    const [movies, setMovies] = useState([]);



    const changeHandlerFun = (e) => {

        setSearch(e.target.value);

        //console.log(search);

    }

    const clearFun = () => {

        setSearch("");
    }

    const subsearch = async (e) => {

        e.preventDefault();
        if (search || search.length > 0) {
            const responce = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`)
            const data = await responce.json();
            setMovies(data.Search);
            console.log(data.Search);
        } else {
            setMovies([])
        }



    }


    return (
        <React.Fragment>
            <div className="wrapper_body">
                <div className="app_name">
                    <h2>Movies Search App</h2>
                </div>

                <div className="search_box">
                    <form onSubmit={subsearch}>
                        <input type="text" placeholder="Search Movie " value={search}
                            onChange={changeHandlerFun} />
                        <input type="submit" value="Search" />
                        <button onClick={clearFun}>  clear</button>
                    </form>
                </div>

            </div>

            {movies.length >= 1 ? <MoviesList movies={movies} /> : <Spinner animation="border" />}

        </React.Fragment>
    )
}
export default Movies;