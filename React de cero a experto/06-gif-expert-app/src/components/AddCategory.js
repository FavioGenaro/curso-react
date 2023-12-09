import { useState } from "react"
import PropTypes from 'prop-types'

export const AddCategory = ( {setCategories}) => {
    // para leer el contenido del input lo hacemos a traves del estado
    const [inputValue, setInputValue] = useState('') // lo dejamos como string vacio, si lo dejamos useState() nos salta un error 

    const handleInputChange = (e) =>{ // recibe el parametro e del onChange
        setInputValue(e.target.value);// actualizamos el valor del input
    }

    const handleSubmit = (e) => { // recibe e del onSubmit
        e.preventDefault(); // evitamos que haga el submit, que recargue la pagina y nos mande a /?
        // console.log('submit hecho')

        if(inputValue.trim().length > 2){ // .trim borra los espacio antes y despues del texto
            // Usamos la forma callBack porque no tenemos al arreglo categorias como tal(aunque podemos pasarlo como prop, pero con esta forma nos ahorramos eso)
            setCategories((cat) => [inputValue,...cat]); // ejecuta la función para añadir el valor del input a la lista, el valor del input va primero
            setInputValue(''); // borramos el input despues de agregarlo a la lista
        }
    }

    return(
        // handleSubmit recibe e de parametro y se ejecuta al hacer submit, que por defecto se hace al presionar enter
        <form onSubmit = {handleSubmit}> 
            <input
            type="text"
            value={inputValue} // colocamos el valor del inputValue en la caja de texto
            onChange={handleInputChange} // pasa el parametro e a esa función
            />
        </form>
    )
}
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
