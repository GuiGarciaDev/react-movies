import { useEffect, useState } from 'react';
import './App.scss'
import MovieCard from './components/movie-card/MovieCard';
import Newsletter from './components/newsletter/Newsletter';
import { BiMoviePlay } from 'react-icons/bi'
import { BsLinkedin, BsTwitter } from 'react-icons/bs'
import TrendingDetails from './components/trending-details/TrendingDetails';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import MovieView from './components/movies-view/MovieView';
import { useQuery } from 'react-query';

const API_KEY = import.meta.env.VITE_API_KEY

export default function App() {
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`
  const { data, isLoading } = useQuery(['nowPlaying'], () => fetch(url).then(res => res.json()))

  return (
    <div className="App">
      <header id='header'>
        <div className="title">
          <BiMoviePlay />
          <span>React Movies</span>
        </div>

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
            { !isLoading 
                ? data.results.map((movie, idx) => {
                  return (
                    <TrendingDetails movie={movie} key={idx}/>
                  )
                })
                : 'Loading...'
            }
          </Carousel>
        </div>
      </section>

      <MovieView 
        text={'Popular'} 
        fetchKey={'popular'} 
        url={'https://api.themoviedb.org/3/movie/popular?api_key='} 
      />

      <MovieView 
        text={'Upcoming'} 
        fetchKey={'upcoming'} 
        url={'https://api.themoviedb.org/3/movie/upcoming?api_key='} 
      />

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
