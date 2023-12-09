import { useEffect, useRef, useState } from "react"

export const useFetch = (url) => {

    const isMounted = useRef(true); // valor incial es true (el componente está montado)
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    })

    useEffect( () => {

        return () => { // el return se ejecuta cuando el componente o el hook deja de existir
            isMounted.current = false; // cambiamos false
        }
    }, []) // se ejecuta una vez el componente sea montado

    useEffect ( () => {

        // resetamos el elemento, cuando se vuelve a hacer otra petición se recetea (mostrará cargando en la interfaz del componente MultipleCustomHooks)
        setState({ data: null, loading: true, error: null})

        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                // hacemos más lento el setState, para probrar un error
                // setTimeout(() => {
                    if(isMounted.current){ // cuando es true, se ejecuta el setState, si es false no hace nada
                        setState({
                            loading:false,// termino de cargar
                            error: null, // en este punto no deberia haber errores
                            data // data es un arreglo de objetos
                        })
                    }else{
                        console.log('El setState se desmonto')
                    }
                // },4000)//demora 4 segundos
                
            });

    }, [url]) // se ejecuta cada vez que al url cambia.

    return state;
}
