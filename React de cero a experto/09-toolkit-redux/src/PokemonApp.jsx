import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from "./store/slices/pokemon"

export const PokemonApp = () => {

    const dispatch = useDispatch() // usamos el hook para disparar cualquier acción, no importa de que pieza del store sea

    useEffect(() => { // usamos esto para que se ejecute solo la primera vez que se renderiza la pagina
        dispatch(getPokemons()) // disparamos el getPokemons, no pasamos el page porque es opcional y por defecto es cero
    }, [])

    // pokemons lo colocamos como arreglo vacio en caso de que no venga nada
    const { isLoading, pokemons = [], page } = useSelector( state => state.pokemons ); // traemos la data del store en pokemons

    return(
        <>
            <h1>PokemonApp</h1>
            <hr />
            <span>Loading: { isLoading ? 'True': 'False' }</span>

            <ul>
            { // mostramos la lista con los nombres de los pokemos
                pokemons.map( ({ name }) => ( // destructuramos el name
                    <li key={ name }>{ name }</li>
                ))
            }
            </ul>
            {/* El boton va a mostrar los siguientes 10 en la lista */}
            <button
                disabled={ isLoading }
                onClick={ () => dispatch( getPokemons(page) ) } // hacemos la petición, en este caso el page ya tiene un +1 por el setPokemons de thunks.js, por lo que si haria petición para la siguiente pagina
            >
                Next
            </button>
        </>
    )
}
