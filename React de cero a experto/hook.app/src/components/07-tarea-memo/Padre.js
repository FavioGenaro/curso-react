import React from 'react'
import { Hijo } from './Hijo'
import { useState, useCallback } from 'react';
import '../02-useEffect/effects.css'

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    // const incrementar = ( num ) => {
    //     setValor( valor + num )
    // }

    const incrementar = useCallback((num) => {
        setValor( v => v + num );
    }, [setValor])

    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />
            {console.log("aa")}
            {
                numeros.map( n => (
                    
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }
            {console.log("BB")}
            {/* <Hijo /> */}
        </div>
    )
}
