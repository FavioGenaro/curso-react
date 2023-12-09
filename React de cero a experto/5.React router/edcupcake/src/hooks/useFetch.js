import {useEffect, useState} from "react";
import {get} from "axios"; // podriamos importar todo Axios, pero solo necesitamos get

const useFetch = (endpoint) => {
    const [data, setData] = useState();
    const [error, setError] = useState(); // cremos un estado para el error

    useEffect (() => { // conenctate a la Api y traime todos los datos
        get(`${process.env.REACT_APP_URL_API}${endpoint}`) // nos traemos los datos de la API, con get, no es necesario colocar el then para el formato JSON
            .then(({data}) => setData(data)) //destructarmos data, que contiene la info, sino destructuramos, colocamos data.data
            .catch(err => setError(err)) // en error almacenamos err
    },[endpoint])

    return [data,error]; // retornamoos todos los datos
}
export default useFetch;