import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0, // porque vamos hacer algun tipo de paginación, pagina cero
        pokemons: [], // arreglo vacio
        isLoading: false,
    },
    reducers: {
        startLoadingPokemons: (state, /* action */ ) => {
            // definimos esta actions, en el que decimos que la información esta cargando
            state.isLoading = true;
        },
        setPokemons: ( state, action ) => {
            // aqui obtenemos los pokemons, este se almacenará en el payload
            state.isLoading = false; // termina de cargar
            // payload es un objeto que tiene el page y la lista de pokemons
            state.page = action.payload.page; // viene la pagina (1,2,3,...)
            state.pokemons = action.payload.pokemons; // viene el arreglo de pokemon (es un objeto con varios pokemons)
        }
    }
});

// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;