import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = (category) => { // exporta la función

    const [state, setState] = useState({ // el estado inicial es este objeto
        data: [],
        loading: true
    })

    useEffect( () => { // el primer parámetro, la función no puede ser async porque esperan algo sincrono
        getGifs(category) // ejecutamos la petición
            .then( imgs => { // al obtener los datos ya podemos cambiar el estado
                // solo colocamos el setTimeout para hacerlo más lento (no es necesario)
                // setTimeout( () => { // despues de 3 segundo cambia el estado 
                setState({
                    data: imgs, // le pasamos las imagenes
                    loading: false // al tener la data termina la carga
                });
                // },3000)
                
            })
    }, [category]) // toma en cuenta category para ejecutar la función

    // setTimeout( () => { // despues de 3 segundo cambia el estado 
    //     setState({
    //         data:[1,2,3,4,5,6],
    //         loading: false // pasa a ser false
    //     })
    // },3000)


    return state; // retornamos el state, que es el objeto
}