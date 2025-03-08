import React from "react";
import { type ListOfTodos } from "../types";


interface Props {
    todos: ListOfTodos
}

// con React.FC podemos tipar las props en base a un generico.
export const Todos: React.FC<Props> = ({todos}) => {

    return (
        <ul>
            {
                todos.map(todo => (

                    <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
                        {todo.title}
                    </li>
                ))
            }
        </ul>
    )
}
// de esta forma podriamos tipar los props
// -Todos.propTypes = {
    
// }