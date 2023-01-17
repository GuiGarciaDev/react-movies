

export function getMovieRuntime( time ) {
    const hours = Math.floor(time/60)
    const minutes = time - (hours*60)

    return {hours: hours, minutes: minutes}
}