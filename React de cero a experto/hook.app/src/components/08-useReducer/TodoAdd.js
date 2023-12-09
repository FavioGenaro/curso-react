import { useForm } from "../../hooks/useForm"

export const TodoAdd = ({handleAddTodo}) => {

    const [{description}, handleInputChange, reset] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();// para que no recague la pagina

        if(description.trim().length <=1){
            return; // si el campo esta vacio, entonces que no haga nada
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description, // pasamos el description
            done: false
        }

        handleAddTodo(newTodo);
        reset(); // despues del dispatch, para que una vez capturado el valor, el formulario se resetee
    }

    return (
        <>
            <h4>Agregar TODO</h4>
            <hr/>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name='description'
                    className="form-control"
                    placeholder='Aprender ...'
                    autoComplete='off'
                    onChange={handleInputChange} // cada vez que cambia el input, se ejecuta handleInputChange
                />
                <button
                    type='submit'
                    className="btn btn-outline-primary mt-1 btn-block"
                >
                    Agregar
                </button>

            </form>
        </>
    )
}
