import { useEffect, useReducer } from 'react'
// import { useForm } from '../../hooks/useForm';
import './styles.css'
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';
import { TodoAdd } from './TodoAdd'

// usamo la función init, que nos ayuda a inicializar de forma rapida el initialState del reduce
// Lo que retorna el init es el initialState
const init = () =>{

    // aqui cada vez que se recarga la pagina, debemos que recuperar los TODOs de localStorage
    // convierte al JSON el string retornado de localStorage; si retorna null, retorna el arreglo vacio.
    // inicialmente tendrá el arreglo vacio, cada vez que agregamos se añaden al arreglo.
    return JSON.parse(localStorage.getItem('todos')) || [];

    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }]
}

export const TodoApp = () => {

    //reducer: función reducer; initialState: state inicial; 
    // init: inicializa el state en caso de que haga varias acciones, memoriza resultados
    // dispatch: dispara las acciones hacia el reducer, identifica los cambios de estado y redibuja
    // const [state, dispatch] = useReducer(reducer, initialState, init);

    // const initialState = [{ // estado inicial
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }]
    // initialState es la lista de los TODOS
    // cambiamos de state a todos. (const [state])
    // dispatch: manda la acción al Reducer
    // initialState es un arreglo vacío, init es el que retorna el initialState
    const [todos, dispatch] = useReducer(todoReducer, [], init); // todoReducer recibe como paremetro a initialState

    // formValues: contiene el nuevo estado, lo destructuramos y sacamos description.
    // handleInputChange: es una función que captura el texto del input cada vez que cambia su valor.
    

    useEffect( () => { // guardamos en localStorage
        // cada cambio en TODOs añade ese TODO al arreglo de objetos en locaStorage
        localStorage.setItem('todos', JSON.stringify(todos)); // localStorage guarda solo string polo que el objeto todos, debemos transformarlo con JSON.stringify
    }, [todos]) //cada vez que la lista de TODOs cambia

    // console.log(description); // retorna el nuevo state que contiene el arreglo que contiene a los TODOS

    const handleDelete = (todoId) => {
        // para eliminar necesitamos construir el action y después el dispatch

        const action = {
            type: 'delete', // lo detectará el Reducer
            payload: todoId // pasamos el id por acá
        }

        // mandamos la acción con el dispatch del reducer
        dispatch(action);
    }

    const handleToggle = (todoId) => {
        const action = {
            type: 'toggle', // lo detectará el Reducer
            payload: todoId // pasamos el id por acá
        }

        // mandamos la acción con el dispatch del reducer
        dispatch(action);
    }

    const handleAddTodo = (newTodo) => {
        const action = {
            type: 'add', // lo detectará el Reducer
            payload: newTodo // podemos no ponerlo, pero lo haremos así
        }

        // mandamos la acción con el dispatch del reducer
        dispatch(action);
    }

    return (
        <div>
            <h1>TodoApp {todos.length}</h1>
            <hr/>
            
            <div className='row'>
                <div className='col-7'>
                    <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle} />
                </div>
                <div className='col-5'>
                    <TodoAdd handleAddTodo = {handleAddTodo}/>
                </div>

            </div>

        </div>
    )
}
