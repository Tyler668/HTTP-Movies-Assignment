import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';


const initialMovie = {
    id: '',
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
        const movieToUpdate = movies.find(item => `${item.id}` === id);
        if (movieToUpdate) {
            console.log('Updating Movie:', movieToUpdate);
            setMovie(movieToUpdate);
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
            .put(`http://localhost:5000/api/movies/${movie.id}`, movie)
            .then(res => {
                console.log(res)
                setMovie(initialMovie)
                props.history.push('/')
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
                    onChange={changeHandler}
                    value={movie.title}
                />

                <input
                    type='text'
                    name='director'
                    placeholder='Director'
                    onChange={changeHandler}
                    value={movie.director}
                />

                <input
                    type='text'
                    name='metascore'
                    placeholder='Metascore'
                    onChange={changeHandler}
                    value={movie.metascore}
                />

                <input
                    type='text'
                    name='stars'
                    placeholder='Stars'
                    onChange={changeHandler}
                    value={movie.stars}
                />

                
                    <button
                        type='submit'
                    >Update!</button>
               

            </form>
        </div>
    );
}


