import { useState } from "react"

export const useForm = (initialState = {}) => { // valor por defecto un objeto vacio, que en sí contendria el name, email, password
    
    const [values, setValues] = useState(initialState);

    const reset = () => { // creamos esta nueva función para resetar el campor
        setValues(initialState)
    }   

    const handleInputChange = ({target}) =>{ // destructuramos el valor de e¿

        setValues({
            ...values, // mantemmos el valor anterior y reescribimos solo la propiedad name
            //computamos el valor del target.name, es decir, en esa parte retorna el valor
            [target.name]: target.value
            // name: value
        })
    }
    // retornamos la función reset
    return [values, handleInputChange, reset] // retorna una arreglo, con los valores del formulario y la función para que capture ese cambio

}
