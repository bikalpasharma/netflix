import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../axios'
import requests from '../Requests'

function Banner() {

    const[movie,setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results [
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    },[]);

console.log(movie);

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }
    return (
        <header className='banner' style={{
            backgroundSize: 'cover',
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
            backgroundPosition: 'center center'
        }}>
            <div className='banner-contents'>
                <h1 className='banner-title'>{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className='banner-btns'>
                    <button className='banner-btn'>Play</button>
                    <button className='banner-btn'>My List</button>
                </div>
                <h1 className='banner-desc'>
                    {
                        truncate(movie?.overview, 150)
                    }

                </h1>
            </div>
            <div className='banner-fade-bottom'></div>
        </header>
    )
}

export default Banner