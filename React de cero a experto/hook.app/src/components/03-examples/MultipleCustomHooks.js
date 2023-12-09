
// import { useState } from "react"
import { useFetch } from '../../hooks/useFetch'
import '../02-useEffect/effects.css'

export const MultipleCustomHooks = () => { // valor por defecto un objeto vacio, que en sí contendria el name, email, password
    // https://pokeapi.co/api/v2/pokemon/ditto
    // https://www.breakingbadapi.com/api/quotes/1
    let cont = 0;
    const {loading, data} = useFetch(`https://pokeapi.co/api/v2/pokemon/`) // realizamos la petición
    //console.log(state) // mostramos el resultado de la petición
    // console.log(data)

    // si exite la data, entonces queda const {name, id} = data.results[0] extrayendo name e id de la data.results[0], sino no evalua nada y name e id serán underfined const {name, id}=null
    const {name, url} = !!data && data.results[cont] // condición logica, se !!data es true ejecutará data[0]

    return (
        <div>
            <h1>Custom Hooks!!!!!</h1>
            <hr/>
            { // usamos operador ternario
                loading
                ?
                    ( // mostramos esto cuando esta cargando
                        <div className='alert alert-info text-center'>
                            Loading...
                        </div>
                    )
                :
                    ( // mostramos esto cuando termina de cargar
                        <blockquote className='blockquote text-right'>
                            <p className='mb-0'>{name}</p>
                            <br/>
                            <footer className='blockquote-footer'> {url} </footer>
                        </blockquote>
                    )
            }
            <button className='btn btn-primary' onClick={ () => { cont = cont+1 }}>
                Siguiente quote
            </button>
        </div>
    )
}

