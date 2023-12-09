import { TodoListItem } from "./TodoListItem"

export const TodoList = ({todos, handleDelete, handleToggle}) => {

    return (
        <ul className="list-group list-group-flush" >
            {
                // extraera el indice, i.
                todos.map((todo, i) => (
                    <TodoListItem key = {todo.id} todo={todo} index={i} handleDelete={handleDelete} handleToggle={handleToggle}/>
                ))
            }
        </ul>
    )
}
