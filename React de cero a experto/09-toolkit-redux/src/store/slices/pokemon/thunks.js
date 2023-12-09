import { pokemonApi } from '../../../api/pokemonApi';
import { setPokemons, startLoadingPokemons } from './pokemonSlice';

// va a conterner todos thunks de pokemons como lo son las peticiones http
export const getPokemons = ( page = 0 ) => { // iniciamos en la pagina cero (en la petición es set=0)
    // retorna una función asincrona
    // dispatch, será llamado al inicio y termino la petición
    // getState, obtenemos el state
    return async( dispatch, getState ) => {
        dispatch( startLoadingPokemons() ); // llamamos a la acción que nos cambia el estado a que esta cargando

        // TODO: realizar petición http
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }`);
        // const data = await resp.json();
        // console.log(data);
        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${ page * 10 }`); // coloamos la parte faltante de la ruta pues la parte inicial es en pokemonApi.js
        console.log(data)
        
        // cuando termine de traer la data, se ejecuta el setPokemons para ternimar de mandar la data al state
        // de la data solo necesitamos el results
        dispatch( setPokemons({ pokemons: data.results, page: page + 1 }) );
    }
}