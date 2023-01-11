import { useEffect, useState } from 'react';
import './App.scss'
import MovieCard from './components/movie-card/MovieCard';

const API_KEY = import.meta.env.VITE_API_KEY
const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500/'

export default function App() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [latestMovies, setLatestMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then(res => res.json())
      .then(data => setPopularMovies(data.results))

      fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
      .then(res => res.json())
      .then(data => setLatestMovies(data.results))

  }, [])

  console.log(latestMovies);

  return (
    <div className="App">
      <header id='header'>
        <span>Movies</span>

        <ul>
          <a href='#header'>Home</a>
          <a href='#popular'>Releases</a>
          <a href='#upcoming'>Hot</a>
        </ul>
      </header>

      <section id='banners'>

      </section>

      <section id='popular'>
        <h1>Popular</h1>
        <div className="popular-content">
          { popularMovies.map((movie, idx) => {
            return (
              <MovieCard 
                title={movie.title} 
                src={IMAGE_PATH + movie.poster_path} 
                key={idx}
                movieId={movie.id}
              />
            )
          })}
        </div>
      </section>

      <section id='upcoming'>
        <h1>Upcoming</h1>
        <div className="upcoming-content">
          { latestMovies.map((movie, idx) => {
              return (
                <MovieCard 
                  title={movie.title} 
                  src={IMAGE_PATH + movie.poster_path} 
                  key={idx}
                  movieId={movie.id}
                />
              )
            })}
        </div>
      </section>

      <section id='newsletter'>
        <h1>Join our newsletter</h1>
        <div className="newsletter-content">

        </div>
      </section>

      <footer>

      </footer>    
    </div>
  )
}
