import {useCounter} from '../../hooks/useCounter'
import './counter.css'

export const CounterWithCustomHook = () => {
    // los dos puntos permiten asignar un nuevo nombre
    // state:counter, counter es el nuevo nombre de state
    const {state:counter, increment, decrement, reset} = useCounter(100); // destructuramos el objeto useCounter (que es lo que retorna esa función)
    // entre parentesis del useCounter, se puede asignar el valor inicial

    return (
        <>
            {/* counter es state */}
            <h1>Counter with Hook { counter }</h1> 
            <hr/>
            {/* al dar clic en los botones, se ejecutan las funciones */}
            {/* debemos colocarla como función anomima para que las funciones no reciban directamente el evento clic */}
            <button className="btn btn-primary" onClick={() => increment(2)}>+1</button>
            <button className="btn" onClick = { reset }>Reset</button>
            <button className="btn btn-danger" onClick={() => decrement(2)}>-1</button>
        </>
    )
}