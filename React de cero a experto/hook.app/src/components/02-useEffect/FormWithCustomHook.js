// import {useCounter} from '../../hooks/useCounter'
// import { useEffect, useState } from 'react'
import { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css'

export const FormWithCustomHook = () => {

    // const [formState, setFormState] = useState({
    //     name:'',
    //     email: '',
    //     password: ''
    // })
    const [formValues, handleInputChange] = useForm({ // usamos el hook que creamos y destructuramos sus valores
        // pasamos como parámeto a este arreglo
        name:'',
        email: '',
        password: ''
    })
    const {name, email,password} = formValues; // destructuramos

    useEffect (() => {
        console.log('email cambió')
    }, [email])

    // const handleInputChange = ({target}) =>{ // destructuramos el valor de e¿

    //     setFormState({
    //         ...formState, // mantemmos el valor anterior y reescribimos solo la propiedad name
    //         //computamos el valor del target.name, es decir, en esa parte retorna el valor
    //         [target.name]: target.value
    //         // name: value
    //     })
    // }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formValues) // mostramos los valores de cada campo del formulario
    }

    return (
        <form onSubmit= {handleSubmit}>
            <h1>FormWithCustomHook</h1> 
            <hr/>
            
            <div className='form-group'>
                <input 
                    type = "text"
                    name="name" // este es el input de name, escribiremos el nombre
                    className='form-control'
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value={name} // el valor del input se guarda en name
                    onChange= { handleInputChange } // cada vez que escribimos ejecuta la función
                />
            </div>
            <div className='form-group'>
                <input 
                    type = "text"
                    name="email" // este es el input de email
                    className='form-control'
                    placeholder='email@gmail.com'
                    autoComplete='off'
                    value={email} // el valor del input se guarda en name
                    onChange= { handleInputChange } // cada vez que escribimos ejecuta la función
                />
            </div>
            <div className='form-group'>
                <input 
                    type = "password"
                    name="password" // este es el input de email
                    className='form-control'
                    placeholder='*****'
                    value={password} // el valor del input se guarda en name
                    onChange= { handleInputChange } // cada vez que escribimos ejecuta la función
                />
            </div>

            <button type="submit" className='btn btn-primary'>
                Guardar
            </button>
        </form>
    )
}