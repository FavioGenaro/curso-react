import { TodoId, type Todo as TodoType } from '../types';

// type Props = TodoType;
// extendemos del TodoType para que se añadan sus propiedades
interface Props extends TodoType {
    onRemoveTodo: ({id}:TodoId) => void
    onToggleCompleteTodo: ({id, completed} : Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todo: React.FC<Props> = ({id, title, completed, onRemoveTodo, onToggleCompleteTodo}) => {

    // tipamos el evento change para el input
    const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
        onToggleCompleteTodo({id, completed: event.target.checked});
    }

    return (
        <div className="view">
            <input 
                className="toggle"
                type="checkbox"
                checked={completed}
                // aquí directamente event es de tipo React.ChangeEvent<HTMLInputElement>
                // onChange={(event)=>{
                //     onToggleCompleteTodo({id, completed: event.target.checked})
                // }}
                onChange={handleChangeCheckbox}
            />
            <label htmlFor="">{title}</label>
            <button 
                className="destroy"
                onClick={() => onRemoveTodo({id})}
            >

            </button>
        </div>
    )
}