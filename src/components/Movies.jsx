import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Movie from './Movie';


const Movies = () => {
    const movies = useLoaderData();
    console.log(movies);
    return (
        <div className='grid-container'>
            {movies?.map(movie => <Movie movie={movie} key={movie.id} />)}
        </div>
    );
};

export default Movies;