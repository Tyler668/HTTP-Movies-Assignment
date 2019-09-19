import React, { useState, useEffect } from 'react';


export const MovieForm = () => {




    return (
        <div className='movie-form-container'>
            <form className='movie-form'>
                <input
                    type='text'
                    name='title'
                    placeholder='Movie Title'
                    
                />

                <input
                    type='text'
                    name='director'
                    placeholder='Director'
                    
                />

                <input
                    type='text'
                    name='metascore'
                    placeholder='Metascore'
                    
                />

                <input
                    type='text'
                    name='stars'
                    placeholder='Stars'
                    
                />

                <button
                    type='submit'
                    
                />

            </form>
        </div>
    );
}


