
// import { useState } from "react"
import { useLayoutEffect, useRef, useState } from 'react';
import './layout.css'
import { useFetch } from '../../hooks/useFetch'
import '../02-useEffect/effects.css'

export const Layout = () => { // valor por defecto un objeto vacio, que en sí contendria el name, email, password
    // https://pokeapi.co/api/v2/pokemon/ditto
    // https://www.breakingbadapi.com/api/quotes/1
    // let cont = 2;
    const [cont, setCont] = useState(1)
    // console.log(cont)
    const {data} = useFetch(`https://pokeapi.co/api/v2/pokemon/${cont}/`) // realizamos la petición
    //console.log(state) // mostramos el resultado de la petición
    // console.log(data)


    // si exite la data, entonces queda const {name, id} = data extrayendo name e id de la data, sino no evalua nada y name e id serán underfined const {name, id}=null
    const {name, location_area_encounters} = !!data && data
    const [boxSize, setBoxSize] = useState({})

    const pTag = useRef();

    useLayoutEffect( () => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [name])

    return (
        <div>
            <h1>Layout Effect</h1>
            <hr/>

            <blockquote className='blockquote text-right'>
                <p className='mb-0' ref={ pTag }>{name}</p>
                <br/>
                <footer className='blockquote-footer'> {location_area_encounters} </footer>
            </blockquote>
            
            <pre>
                {
                    JSON.stringify(boxSize, null, 3)
                }
            </pre>

            <button className='btn btn-primary' onClick={ () => { setCont(cont+1)}}>
                Siguiente quote
            </button>
        </div>
    )
}


