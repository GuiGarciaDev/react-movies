import { useParams } from 'react-router-dom'
import './MoviePage.scss'

export default function MoviePage() {
    const { movieid } = useParams()
    return (
        <div className="MoviePage">MOVIE ID: {movieid}</div>
    )
}