import React, { useState } from 'react'
import styles from './MoviesList.css'

// import Axios from "axios";
//import { API_KEY } from "./Movies";
import MovieInfo from './MovieInfo'



const MoviesList = ({ movies }) => {
    const [show, setShow] = useState(false);
    const [movieInfo, setMovieInfo] = useState();

    const closeModal = () => {
        setShow(false)
    }
    const openModal = () => {

        setShow(true);
        setMovieInfo()

    }


    // useEffect(()=>{
    //     Axios.get(`https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`,
    //     ).then((responce)=>setMovieInfo(responce.data));
    // },[movies]);

    return (
        <React.Fragment>

            <div className="movies_list">
                    
                { movies && movies.length>0 && movies.map((list, index) => {

                    return (
                        <div key={index} className="movies_body">
                            <a onClick={() => (openModal())} >     <img src={list.Poster} /> </a>
                            <h3>{list.Title}</h3>
                            <h4>{list.Year}</h4>
                            <h5>{list.Type}</h5>


                        </div>

                    )
                })

                }
                <MovieInfo show={show} closeModal={closeModal} />


            </div>


        </React.Fragment>
    )


}
export default MoviesList;