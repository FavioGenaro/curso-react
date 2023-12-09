import { useRef, useState } from 'react';
import '../02-useEffect/effects.css';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

export const RealExampleRef = () => {

    // const inputRef = useRef();
    // console.log(inputRef)

    const [show, setShow] = useState(false)

    return (
        <div>
            <h1>Real Example Ref</h1> 
            <hr/>
            {show && <MultipleCustomHooks/>/* si show es true muestra el componente, sino no lo hace */} 
            <button 
                className='btn btn-primary mt-5'
                onClick={ () => {
                    setShow(!show)// cambiamos al valor opuesto de show
                }}
            > 
                Show/Hide
            </button>
        </div>
    )
}