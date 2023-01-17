
export function getMovieGenres( genres ) {
    // Get an object and return an array with multiple genres

    if (typeof genres === 'object') {
        let array = []
        genres.map((genre) => {
            array.push(genre.name)
        })
        return array.join(', ')
    }
    
    return '..'
}