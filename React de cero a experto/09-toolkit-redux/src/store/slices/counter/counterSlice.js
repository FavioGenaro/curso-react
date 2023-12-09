import { createSlice } from '@reduxjs/toolkit' // viene de toolkit

export const counterSlice = createSlice({
    name: 'counter1',
    initialState: { //definimos como un objeto que almacena el valor del counter
        counter: 10
    },
    reducers: {
        increment: (state) => { //recibimos el state como argumento
            /* Toolkit nos permite de escribir codigo mutante(state.value += 1 muta el state)
            pero este se encarga de generar un nuevo state gracia a la libreria Immer */
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
            // state.value += 1
            state.counter += 1// es counter por el initialState
        },
        decrement: (state) => {
            state.counter -= 1
        },
        incrementBy: (state, actions) => { // el otro valor que puede recibir es actions, que contiene argumentos que le podemos pasar a la acción
            console.log(actions) // el segundo argumento es actions, que puede ser cualquier valor, como un número, objeto, string, etc
            state.counter += actions.payload
        }
    },
})
console.log(counterSlice)
// Action creators are generated for each case reducer function
// aqui exportamos las acciones, que se crean con el mismo nombre con el que definimos en el createSlice
export const { increment, decrement, incrementBy } = counterSlice.actions // el counterSlice, que acabamos de crear, retorna un objeto con las acciones, estas acciones son los reducers

// export default counterSlice.reducer // podemos exportarlo por defecto, pero queda un poco raro, pues el .reducer lo colocaremos directamente en el store.js

