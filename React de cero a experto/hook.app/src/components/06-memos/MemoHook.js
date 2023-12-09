
import { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import {procesoPesado} from '../../helpers/procesoPesado'
import '../02-useEffect/effects.css'

export const MemoHook = () => { 

    const {state, increment} = useCounter(10)

    const [show, setShow] = useState(true)

    // El state será detectado por useMemo, si cambia, ejecutara nuevamente el procesoPesado(state) para memorizar el nuevo valor, si no solo usa la versión memorizada
    const memoProcesoPesado = useMemo( ()=> procesoPesado(state), [state] ) // memoProcesoPesado guarda es valor memorizado de la función procesoPesado

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{state}</small> </h3>
            <hr/>

            {/*<p>{procesoPesado(state)}</p> /*realiza state iteraciones*/}
            <p>{memoProcesoPesado}</p> {/*mostramos el valor memorizado */}

            <button
                className='btn btn-primary'
                onClick={() => increment(1) }
            >
                +1
            </button>
            <button // cambiar el estado de show de true a false y viserversa
                className='btn btn-outline-primary ml-3'
                onClick={ () => setShow(!show)}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
