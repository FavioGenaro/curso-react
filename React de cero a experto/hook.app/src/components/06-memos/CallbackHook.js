
// import { useMemo, useState } from 'react'
// import { useCounter } from '../../hooks/useCounter'
// import {procesoPesado} from '../../helpers/procesoPesado'
import { useCallback, useState } from 'react';
import '../02-useEffect/effects.css'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => { 

    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter(counter + 1);
    // }
    // va a regresar una versión memorizada de la función que va a servir para mandarla como argumento en otros lugares si las depencias(valores entre parentesis) no a cambiado
    const increment = useCallback((num) => {// esta función se ejecutará. num es el parametro de la función.
        // setCounter(counter + 1);
        setCounter(c => c + num); // con esto eliminamos el error y la necesidad de usar el counter como dependecia
    }, [setCounter])
    
    return (
        <div>
            <h1>useCallback Hook: {counter}</h1>
            <hr/>

            <ShowIncrement increment={increment}/> {/* boton que realiza el incremento */}

        </div>
    )
}