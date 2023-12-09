
const initialState = [{ // estado inicial
    id:1,
    todo: 'Comprar pan',
    done: false
}]

// DEFINIMOS EL REDUCER
// creamos una función, que vendrá a ser el reducer
const todoReducer = (state = initialState, action) => { // state por defecto es initialState

    // leemos la acción
    if(action?.type === 'agregar'){ // agregamos ? al action pues al inicio no pasamos un action, asi que con ? detecta si esta el action y buscara al type y lo leera
        return [...state, action.payload] // añadimos al arreglo, no lo hacemos con push pues este muta todo el arreglo
    }
    // solo debemos usar el state y accion dentro de la función, no debemos depender de otras funciones(función pura), 
    // esto debe solucionarse dentro y retornar un valor
    return state // retorna un nuevo estado
}

// INICIALIZAMOS EL REDUCER
let todos = todoReducer() // regresa el nuevo state, inicialmente sin action

// CREAMOS EL TODO A INSERTAR 
// todos.push(), por ser un arreglo podriamos usarlo, pero no lo podemos hacer porque más adelante nos llevará a errores
const newTodo = { // nuevo TODO que buscamos añadir
    id:2,
    todo: 'Comprar leche',
    done: false
}

// CREAMOS LA ACCION DE AGREGAR
const agregarTodoAction = { // definimos una acción, que dice que tipo de acción es
    type: 'agregar', // este nombre se evalu
    payload: newTodo // mandamos ese nuevo todo
}

// AGREGAMOS EL TODO
// ejecutamos el recucer con la acción, todos es el estado incial y le pasamos la acción
todos = todoReducer(todos, agregarTodoAction)

console.log(todos) // mostramos en consola
