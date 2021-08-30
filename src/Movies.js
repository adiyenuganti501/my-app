import React, { useState } from "react"
//import './Movies.module.scss';
import Spinner from 'react-bootstrap/Spinner'
import styles from './Movies.css'
import MoviesList from "./MoviesList";
import JsonUsers from "./JsonUsers";
export const API_KEY = "a9118a3a";


const Movies = () => {
    const [search, setSearch] = useState('');
    const [error, setError] = useState("");
    const [movies, setMovies] = useState([]);
    const [showloader, setShowloader] = useState(false);



    const changeHandlerFun = (e) => {

        setSearch(e.target.value);


        //console.log(search);

    }

    const clearFun = () => {

        setSearch("");
        setError("")
    }

    const subsearch = async (e) => {
        setShowloader(true);
        e.preventDefault();
        if (search || search.length > 0) {
            const responce = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`)
            const data = await responce?.json();
            data?.Search ? setMovies(data.Search) : setMovies([])
            data?.Error ? setError(data.Error) : setError("");
        } else {

            setMovies([])
        }

        setShowloader(false)

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
                        <p>{error}</p>  
            {showloader ? <div className="spinner"><Spinner animation="border" /> </div> : <MoviesList movies={movies} />}

            <JsonUsers/>
               
        </React.Fragment>
    )
}
export default Movies;