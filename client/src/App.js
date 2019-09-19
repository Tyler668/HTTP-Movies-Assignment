import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import { MovieForm } from './Movies/MovieForm';
import axios from 'axios';

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movies, setMovies] = useState([]);
 

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/movies")
      .then(res => 
        setMovies(res.data)
        )
      .catch(err => console.log(err.response));
  }, [])

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  const deleteMovie =(movie) => {
    axios
      .delete(`http://localhost:5000/api/movies/${movie.id}`)
      .then(res => {
        window.location ='/'
        console.log(res)
       
      })
      .catch(err => console.log(err))

  }


  return (
    <>
      <SavedList list={savedList} />
      <Route exact path="/" render={props => {
          return <MovieList {...props} deleteMovie = {deleteMovie}/>;
        }}
         />
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} deleteMovie = {deleteMovie}/>;
        }}
      />
      <Route path="/update-movie/:id" render={props => (
        <MovieForm {...props} movies={movies} setMovies={setMovies} />
      )} />
    </>
  );
};

export default App;
