import { useEffect, useState } from 'react'
import { getMovieGenres } from '../../utils/getMovieGenres';
import { getMovieRuntime } from '../../utils/getMovieRuntime';
import { percentToDeg } from '../../utils/percentToDeg';
import MovieRating from '../movie-rating/MovieRating';
import './TrendingDetails.scss'

const API_KEY = import.meta.env.VITE_API_KEY;
const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500/'
const BACKDROP_PATH = 'https://image.tmdb.org/t/p/original/'

export default function TrendingDetails({ movie }) {
    const [movieDetails, setMovieDetails] = useState([{}]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_KEY}&language=en-US&page=1`)
            .then(res => res.json())
            .then(data => {
                setMovieDetails(data)
            })
    }, [movie])

    const title = movie.title
    const overview = movie.overview
    const year = movie.release_date ? movie.release_date.slice(0, 4) : 'Undefined'
    const release_date = movie.release_date
    const backdrop_path = movie.backdrop_path
    const time = getMovieRuntime(movieDetails.runtime)
    const genres = getMovieGenres(movieDetails.genres)
    const score = Math.ceil(movieDetails.vote_average * 10)
    const deg = percentToDeg(score)

    return (
        <div className="TrendingDetails" style={{backgroundImage: `url(${BACKDROP_PATH + backdrop_path})`}}>
            <div className='backdrop-gradient'>
                <div className="leftColumn">
                    <img src={IMAGE_PATH + movie.poster_path} alt="Movie image" />
                </div>
                <div className="rightColumn">
                    <h2>{title} <span>{`(${year})`}</span></h2>
                    <div className="subtitle">
                        <p>{`L`}</p>
                        <p>{genres}</p>
                        <p>{`${time.hours}h ${time.minutes}min`}</p>
                    </div>

                    <p className='releaseDate'>Release date: {release_date}</p>

                    <h3>Sinopse</h3>
                    <p>{overview}</p>

                    <div className="score">
                        <MovieRating score={score} deg={deg}/>
                        <p>User score</p>
                    </div>
                </div>
            </div>
        </div>
    )
}