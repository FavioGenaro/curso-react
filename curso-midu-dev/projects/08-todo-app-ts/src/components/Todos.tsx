import React from "react";
import { type Todo as TodoType, TodoId, type ListOfTodos } from '../types';
import { Todo } from "./Todo";


interface Props {
    todos: ListOfTodos
    onToggleCompleteTodo: ({id, completed} : Pick<TodoType, 'id' | 'completed'>) => void
    onRemoveTodo: ({id} : TodoId) => void // tipamos una funcion anonima
}

// con React.FC podemos tipar las props en base a un generico.
export const Todos: React.FC<Props> = ({todos, onRemoveTodo, onToggleCompleteTodo}) => {

    return (
        <ul className="todo-list">
            {
                todos.map(todo => (

                    <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
                        <Todo
                            id={todo.id}
                            title={todo.title}
                            completed={todo.completed}
                            onRemoveTodo={onRemoveTodo}
                            onToggleCompleteTodo={onToggleCompleteTodo}
                        />
                    </li>
                ))
            }
        </ul>
    )
}
// de esta forma podriamos tipar los props, pero no lo usaremos
// -Todos.propTypes = {
    
// }