
export const TodoListItem = ({todo, index, handleDelete, handleToggle}) => {

    return (
        <li
            key = {todo.id}
            className="list-group-item"
        >
            <p 
                className={`${todo.done && 'complete'}` /* si es true regresa el texto complete, es un clase definida en el css para que tache el texto */}
                onClick={() => handleToggle(todo.id)/* al hacer click cambia el valor del done */} 
            >
                { index+1 }. { todo.desc /* mostramos las descripción del todo*/}
            </p>
            <button 
                className='btn btn-danger deleteTodo'
                onClick={
                    // lo hacemos haci porque el onclick manda e como parametro y no queremos eso
                    () => handleDelete(todo.id)
                }
            >
                Borrar
            </button>
        </li>
    )
}
