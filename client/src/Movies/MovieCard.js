import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';


const MovieCard = props => {
  const { id, title, director, metascore, stars } = props.movie;
  console.log('Stars', stars)
  console.log('Movie ID to be deleted',id)

  

  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}

      <NavLink to={`/update-movie/${id}`}>
        <div className="change-button" >
          Change
        </div>
      </NavLink>

      <div onClick = {() => props.deleteMovie(props.movie)} className="delete-button" >
        Delete
        </div>


    </div>
  );
};

export default MovieCard;
