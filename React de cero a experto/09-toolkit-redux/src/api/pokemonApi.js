import axios from 'axios';

export const pokemonApi = axios.create({ // creamos una configuración estandar para no estar repitiendo codigo varias veces
    baseURL: 'https://pokeapi.co/api/v2' // baseURL contiene la url de la api, solo faltaria agregar los argumentos en la api, pero esta parte se repite en todas las peticiones
});