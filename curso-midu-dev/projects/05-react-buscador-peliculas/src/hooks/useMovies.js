import withResults from "../mocks/with-results.json";
import withoutResults from "../mocks/no-results.json";
import { useCallback, useMemo, useRef, useState } from "react";
import { searchMovies } from "../services/movies";

export function useMovies({ search, sort}){
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const previousSearch = useRef(search) // guardamos el valor de la busqueda, este no se pierde

    // retornamos o actualizamos el valor de las peliculas en base al valor del search
    // useCallback es igual al useMemo, solo que useCallback sirve para memorizar funciones
    // porque al igual que las variables, las funciones se vuelven a generar cada vez que un valor con search cambia
    const getMovies = useCallback( async ({ search }) => {
        // debemos pasar search como parametro porque el useCallback almacenaría el valor de search como ''
        // desde el inicio y lo haria varia porque asi lo memorizo, pero al ser un parámetro tomaria el valor que le pasemos
        // si es el mismo no cambia de valor
        // si bien el setMovies(previus => ...) recibe el valor antes de la actualización, por el hecho de solo llamarlo ya se actualiza
        if(search === previousSearch.current) return;

        try{
            setLoading(true);
            setError(null);
            previousSearch.current = search; // actualizamos el useRef
            const newMovies = await searchMovies({search});
            setMovies(newMovies);
        }catch (e){
            setError(e.message)
        }finally{
            setLoading(false);
        }
    }, []) // no colocamo ningun valor para que solo genere la funcion se genere una vez.


    // si hacemos esto, cada vez que un valor como search se actualice(es un state), se vuelve a renderizar
    // o reconstruir cada función o valores del hook, por eso usamos useMemo para memorizar valores.
    // usamos useCallback para memorizar funciones y que no se generen a cada rato.
    // const sortedMovies = sort ? [...movies].sort ....

    // memoriza el valor para no tener que calcularlo según algunas dependencias
    // recibe un callback que debe retornar un valor a memorizar y luego un arreglo con variables
    // si cambian el valor de las variables se vuelve al ejecutar el callback para memorizar el nuevo valor
    const sortedMovies = useMemo(() => {

        if (!movies) return;

        return sort // retorna un valor, por ello usamos useMemo, sino este orden siempre se ejecutaria y recalcularia
            ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
            : movies
    }, [sort, movies]) // se vuelve a ejecutar el callback en caso cambien esas variables, parecido al useEffect

    return {movies: sortedMovies, getMovies, loading}; // retorno como movies
}