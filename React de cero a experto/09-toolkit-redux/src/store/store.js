import { configureStore } from '@reduxjs/toolkit'
import { todosApi } from './apis'
import { counterSlice } from './slices/counter/counterSlice'
import { pokemonSlice } from './slices/pokemon/pokemonSlice'

export const store = configureStore({ // creamos nuestro store
    reducer: {
        // counter, sera el nombre con el que se identificara esta pieza en nuestro store
        // el counterSlice es el slice que creamos, el .reducer es parte de lo que devulve el slice
        counter: counterSlice.reducer,

        // añadimos el nuevo slice, este tendrá como nombre pokemons y le pasamos el pokemonSlice.reducer
        pokemons: pokemonSlice.reducer,

        // aqui colocamos los resultados producto del querys que vamos a colocar aquí
        [todosApi.reducerPath]: todosApi.reducer
    },
    // configuramos los middlewares (son funciones que se ejecutan antes que otra)
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApi.middleware)
})