
import { useRef } from 'react';
import '../02-useEffect/effects.css';

export const FocusScreen = () => {

    const inputRef = useRef();
    console.log(inputRef)

    const handleClick = () => { // coloca el foco al primer input
        // document.querySelector('input').focus(); // coloca el cursor en la caja de texto, si ya habia texto, este se coloca al final
        // document.querySelector('input').select(); // coloca el cursor en la caja de texto, si ya habia texto, lo selecciona
        inputRef.current.select();
        console.log(inputRef)
    }

    return (
        <div>
            <h1>Focus Screen</h1> 
            <hr/>
            <input
                ref = {inputRef}
                className='form-control'
                placeholder='Su nombre'
            />
            <button 
                className='btn btn-outline-primary mt-5'
                onClick={handleClick} // ejecuta la función
            > 
                Focus 
            </button>
        </div>
    )
}