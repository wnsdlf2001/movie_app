import React from "react";
import propTypes from "prop-types";
import "./Movie.css";
function Movie({id, year, title, summary, poster, genres}){
    return (
        <div>
         <h1 className="movie_title">{title} {year}</h1>
         <img src={poster} alt={title}/>
         <ul className="genres">{genres.map((genre,idx) => <li key={idx} className="genres_genre">{genre}</li>)}</ul>
         <h4 className="movie_summary">{summary}</h4>
        </div>
        
    )
}

Movie.propTypes = {
    id : propTypes.number.isRequired,
    year : propTypes.number.isRequired,
    title : propTypes.string.isRequired,
    summary : propTypes.string.isRequired,
    poster : propTypes.string.isRequired,
    genres : propTypes.arrayOf(propTypes.string).isRequired,
}


export default Movie;