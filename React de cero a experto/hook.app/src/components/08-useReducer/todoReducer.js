
export const todoReducer = (state = [], action) =>{

    // antes lo hicimos con ifs, pero es mejor con el switch
    switch (action.type) {
        case 'add':// action de agregar TODO
            // definimos esta acción    

            return [...state, action.payload];
        case 'delete':
            // payload será el id del elemento a eliminar, lo usaremos para almacenar el id.
            // escoge solo los que no sean igual a ese id.
            return state.filter(todo => todo.id !== action.payload)
        case 'toggle':

            return state.map (todo => // forma corta usando un ternario
                (todo.id === action.payload) // condición
                    ? {...todo, done: !todo.done} // si cumple la condición
                    : todo // si no cumple, regresa el todo normal
                // FORMA LARGA DE HACERLO
                // {
                // if(todo.id === action.payload){
                //     return{
                //         ...todo, // todos los valores del todo
                //         done:!todo.done // al done lo cambiamos a su contrario, de true a false ó de false a true
                //     }
                // }else{
                //     return todo; // hay que regresae algo, sino ese todo se coloca en underfined
                // }
                // }
            )

        default: // se ejecuta cuando se inicializa el reducer
            return state;
    }
}
