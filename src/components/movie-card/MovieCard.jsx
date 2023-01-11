import './MovieCard.scss'

export default function MovieCard({ src, title, movieId }) {
    return (
        <a className="MovieCard" href={`/movies/${movieId}`}>
            <img src={src}/>
            <span>{title}</span>
        </a>
    )
}