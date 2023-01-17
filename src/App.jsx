import { useEffect, useState } from 'react';
import './App.scss'
import MovieCard from './components/movie-card/MovieCard';
import Newsletter from './components/newsletter/Newsletter';
import { BsLinkedin, BsTwitter } from 'react-icons/bs'
import TrendingDetails from './components/trending-details/TrendingDetails';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const API_KEY = import.meta.env.VITE_API_KEY
const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500/'

export default function App() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [latestMovies, setLatestMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([{}]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then(res => res.json())
      .then(data => setPopularMovies(data.results))

      fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
      .then(res => res.json())
      .then(data => setLatestMovies(data.results))

      fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`)
      .then(res => res.json())
      .then(data => setNowPlayingMovies(data.results))

  }, [])

  return (
    <div className="App">
      <header id='header'>
        <span>Movies</span>

        <ul>
          <a href='#header'>Home</a>
          <a href='#popular'>Popular</a>
          <a href='#upcoming'>Upcoming</a>
        </ul>
      </header>

      <section id='banners'>
        <h1>Now on theaters</h1>
        <div className="carousel-holder">
          <Carousel swipeable={true} width={'100%'} dynamicHeight={true} showThumbs={false} infiniteLoop={true}>
            { nowPlayingMovies.map((movie, idx) => {
              return (
                <TrendingDetails movie={movie} key={idx}/>
              )
            })}
          </Carousel>
        </div>
      </section>

      <section id='popular'>
        <span className='title'>Popular</span>
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
        <span className='title'>Upcoming</span>
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
        <Newsletter />
      </section>

      <footer>
        <div className="icons">
          <span/>
          <a href="https://www.linkedin.com/in/guilherme-garcia-a9890225a/" style={{color: '#0e76a8'}}><BsLinkedin /></a>
          <a href="https://twitter.com/GuiGarciaDev" style={{color: '#1DA1F2'}}><BsTwitter /></a>
          <span/>
        </div>
        <div className="information">
          <h2>React Movies</h2>
          <p>Made by @GuiGarciaDev</p>
          <div className="anchors">
            <span>Legal Information</span>
            <span className="divider" />
            <span>Privacy Policy</span>
          </div>
        </div>
      </footer>    
    </div>
  )
}
