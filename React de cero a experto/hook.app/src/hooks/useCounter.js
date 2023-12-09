import { useState } from 'react'

// valor por defecto es 10, si mandan algo cambia ese valor, initialState guarda el valor que le pasan
export const useCounter = (initialState = 10) => { // es una función

    const [state, setState] = useState(initialState)

    // a cada funcion le pasamos una facto de incremento o decremento, su valor por defecto es 1
    const increment = (factor = 1) => {
        setState(state + factor)
    }

    const decrement = (factor = 1) => {
        setState(state - factor)
    }
    // botón para reseto
    const reset = () => {
        setState(initialState) /* initialState almacena el valor que pasan a la función, luego se la pasa al state */
    }

    return { // retornamos un objeto
        state,
        increment,
        decrement,
        reset
    }

}
