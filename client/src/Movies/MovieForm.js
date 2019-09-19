import React, { useState, useEffect } from 'react';
import axios from 'axios';


const initialMovie = {
    id: Date.now(),
    title: '',
    director: '',
    metascore: '',
    stars: []
}

export const MovieForm = (props) => {

    const [movie, setMovie] = useState(initialMovie);


    const { match, movies } = props;
    useEffect(() => {
      const id = match.params.id;
      const itemToUpdate = movies.find(item => `${item.id}` === id);
      if (itemToUpdate) {
        console.log(itemToUpdate);
        setMovie(itemToUpdate);
      }
    }, [match, movies]);


    const changeHandler = (ev) => {
        ev.persist();
        let value = ev.target.value;

        setMovie({
            ...movie,
            [ev.target.name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:5000/api/movies/${movie.id}`)
            .then(res => { 
                console.log(res) 
                setMovie(initialMovie)

                // props.setMovie
            })
            .catch(err => { console.log(err) })
    }


    return (
        <div className='movie-form-container'>
            <h1>Change Something!</h1>
            <form onSubmit={handleSubmit} className='movie-form'>
                <input
                    type='text'
                    name='title'
                    placeholder='Movie Title'
                    onChange = {changeHandler}
                />

                <input
                    type='text'
                    name='director'
                    placeholder='Director'
                    onChange = {changeHandler}
                />

                <input
                    type='text'
                    name='metascore'
                    placeholder='Metascore'
                    onChange = {changeHandler}
                />

                <input
                    type='text'
                    name='stars'
                    placeholder='Stars'
                    onChange = {changeHandler}
                />

                <button
                    type='submit'
                >Update!</button>

            </form>
        </div>
    );
}


