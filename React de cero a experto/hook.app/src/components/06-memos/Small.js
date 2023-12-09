
// import { useCounter } from '../../hooks/useCounter'
import '../02-useEffect/effects.css'
// import React from 'react'
import {memo} from 'react'// destruturado
export const Small = memo(({value}) => { 

    console.log('Me volvi a llamar :(') // se llama cada vez que se modifica el valor

    return (
        <small>
            {value}
        </small>
    )
})