import { useGetTodosQuery,useGetTodoQuery } from "./store/apis"
import { useState } from 'react';
export const TodoApp = () => {

    // const algo = useGetTodosQuery()
    // console.log(algo)

    // const { data: todos = [], isLoading } = useGetTodosQuery(); // traemos todos los TODOS

    const [ todoId, setTodoId] = useState(1); // lo usamos para realizar el cambio de id del todo, al cambiar el estado redibuja el componente con la nueva petición
    const { data: todo, isLoading } = useGetTodoQuery( todoId ); // traemos un todo en particular
    console.log(todo) // data cambia de nombre a todo

    const nextTodo = () => {
        setTodoId( todoId + 1 );
    }

    const prevTodo = () => {
        if ( todoId === 1 ) return;
        setTodoId( todoId - 1 );
    }

    return(
        <>
            <div>TodoApp - RTK query</div>
            <h4>isLoading: { isLoading ? 'True': 'False' } </h4>

            <pre>{ JSON.stringify( todo ) }</pre>

            <button onClick={ prevTodo }>
                Prev Todo
            </button>
            <button onClick={ nextTodo }>
                Next Todo
            </button>
            {/* 
            <ul>
                { todos.map( todo => (
                    <li key={ todo.id }>
                        <strong> { todo.completed ? 'DONE' : 'Pending' } </strong> 
                        { todo.title }
                    </li>
                ) ) }
            </ul> */}
        </>
    )
}

