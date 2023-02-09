import { useQuery } from 'react-query'
import MovieCard from '../movie-card/MovieCard';
import styles from './styles.module.scss'

export default function MovieView({ text, url, fetchKey }) {
    const API_KEY = import.meta.env.VITE_API_KEY
    const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500/'

    const { data, isLoading } = useQuery([fetchKey], () => fetch(url + `${API_KEY}`).then(res => res.json()))
    
    return (
        <div className={styles.movieView}>
            <span className={styles.title}>{text}</span>
            <div className={styles.content}>
                { !isLoading
                    ? data.results.map((movie, idx) => {
                        return (
                            <MovieCard 
                                title={movie.title} 
                                src={IMAGE_PATH + movie.poster_path} 
                                key={idx}
                                movieId={movie.id}
                            />
                        )})
                    : 'Loading...'
                }
            </div>
        </div>
    )
}