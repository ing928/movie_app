import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import "./Movie.css";

function Movie({ id, year,title,summary,poster,genre}){
    return( 
    <div className="movie">
        <Link to={{
            pathname: `/movie/${id}`,
            state: {
            year,
            title,
            summary,
            poster,
            genre}
            }}>
            <img src={poster} alt={title} title={title}/>
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">year: {year}</h5>
                <ul className="movie__genre">
                    {genre.map((genre, index) =>(
                        <li key={index} className="genres__genre">{genre}</li>
                    ))}
                </ul>
                <p className="movie__summary">{summary.slice(0,130)}...</p>
            </div>
        </Link>
    </div>
    
    )
}

Movie.propTypes={
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genre: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;