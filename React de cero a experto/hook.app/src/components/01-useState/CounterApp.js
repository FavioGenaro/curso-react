import { useState } from 'react'
import './counter.css'

export const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1:10,
        counter2:20,
        counter3:20,
        counter4:20
    })

    const{counter1,counter2} = counter; // desfragmentamos depues de declararlo para usar los valores de forma independiente

    return (
        <>
            <h1>Counter {counter1}</h1>
            <h1>Counter {counter2}</h1>
            <hr/>

            <button 
                className="btn btn-primary"
                onClick={() => {
                    // setCounter({ /* debemos colocar todo el objeto nuevamente, sino perdemos los valores */
                    //     counter1: counter1 + 1,
                    //     counter2: counter2
                    // })
                    setCounter({ /* con el expret ... traemos a todo el estado anterior y modificamos luego los valores */
                        ...counter,/* llamamos al estado anterior, por eso es que no desfragmentamos al inicio */
                        counter1: counter1 + 1
                    })
                }}
            >
                +1
            </button>
        </>
    )
}
