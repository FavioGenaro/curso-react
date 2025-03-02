const API_KEY = '4287ad07'

// servicio para el manejo de peticiones
export const searchMovies = async ({ search }) => {
    if (search === '') return null

    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        const json = await response.json(); // json de las respuesta

        const movies = json.Search // los resultados estan envueltos en Search

        // aquí es un buen lugar para hacer el mapeo de datos
        return movies?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            img: movie.Poster
        }));
    } catch (e) {
        throw new Error('Error searching movies')
    }
}