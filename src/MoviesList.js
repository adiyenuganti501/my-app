import React from 'react'
import styles from './MoviesList.css'


const MoviesList = ({ movies }) => {

    return (
        <React.Fragment>

            <div className="movies_list">

                {movies.map((list, index) => {

                    return (
                        <div key={index} className="movies_body">
                            <img src={list.Poster} />
                            <h3>{list.Title}</h3>
                            <h4>{list.Year}</h4>
                            <h5>{list.Type}</h5>


                        </div>

                    )
                })

                }



            </div>

           
        </React.Fragment>
    )


}
export default MoviesList;