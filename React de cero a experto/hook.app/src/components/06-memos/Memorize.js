
import { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import '../02-useEffect/effects.css'
import { Small } from './Small'

export const Memorize = () => { 

    const {state, increment} = useCounter(10)

    const [show, setShow] = useState(true)

    return (
        <div>
            <h1>Counter: <Small value ={state}/> </h1>
            <hr/>

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
