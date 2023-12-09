// import {useCounter} from '../../hooks/useCounter'
import { useEffect, useState } from 'react'
import {Message} from './Message.js'
import './effects.css'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name:'',
        email: ''
    })
    const {name, email} = formState; // destructuramos

    // effect permite realizar un efecto secundario cuando algo sucede en el componente
    // esta se ejecuta al renderizar el componente
    useEffect(() => {
        // console.log('hey!')
    }, [])

    useEffect(() => {
        // console.log('formState cambio')
    }, [formState]) // cuando el formState cambio
    
    useEffect(() => {
        // console.log('email cambio')
    }, [email]) // cuando el email cambia (variable destructurada)

    const handleInputChange = ({target}) =>{ // destructuramos el valor de e
        // no olvidar que target apunta al elemento que dispara el evento, que es el input
        // console.log(e.target.name) // retorna su propiedad name = name
        // console.log(e.target.value) // retorna su valor = value

        setFormState({
            ...formState, // mantemmos el valor anterior y reescribimos solo la propiedad name
            //computamos el valor del target.name, es decir, en esa parte retorna el valor
            [target.name]: target.value
            // name: value
        })
    }
    return (
        <>
            <h1>useEffect</h1> 
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
            {(name === '123') && <Message/> /* renderizamos el componente Message de forma condicional */}
        </>
    )
}