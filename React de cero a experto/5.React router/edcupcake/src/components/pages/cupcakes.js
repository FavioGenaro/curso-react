// import {useEffect, useState} from "react";
// import {get} from "axios"; // podriamos importar todo Axios, pero solo necesitamos get
import Cupcake from "../cards/Cupcake";
import useFetch from "../../hooks/useFetch";

const Cupcakes = ({peticion, title}) => {

    // const [cupcakes, setCupcakes] = useState(); // cupcake inicialmente es underfine, por los que nos dara error
    // antes de mostrarlo es mejor poner una condicional verficando de que no sea underfine y una vez recolecta la info de la API, renderiza los cupcake

    // useEffect(() => { // conenctate a la Api y traime todos los datos
    //     fetch(`${process.env.REACT_APP_URL_API}${peticion}`) // nos traemos los datos de la API, con variable de entorno
    //         .then(response => response.json()) // leemos la api en formato JSON
    //         .then(data => setCupcakes(data)) // actualizo, cupcakes de useState = data
    //         .catch(e => console.log(e)) // para la detección de los errores
    // },[peticion]) // colocamos petición para que useEffect escuche como varia petición, podemos añadir un buscador y petción cambiaria y ser renderizaria la busqueda con nuevos elementos

    // useEffect(() => { // conenctate a la Api y traime todos los datos
    //     get(`${process.env.REACT_APP_URL_API}${peticion}`) // nos traemos los datos de la API, con get, no es necesario colocar el then para el formato JSON
    //         .then(({data}) => setCupcakes(data)) //destructarmos data, que contiene la info, sino destructuramos, colocamos data.data
    //         .catch(e => console.log(e)) // para la detección de los errores
    // },[peticion])

    const [cupcakes, error] = useFetch(peticion); // con nuestro hook recucimos el codigo, podriamos solo usar cupcake pero añadimos el error por seacaso 

    return(
        <div className="ed-grid">
            {/* si existe title muestra el titulo */}
            { title && <h1>Página de cupcakes</h1>}
            { 
                // condicional, si es underfine, es decir, aun no contiene info, se muestra cargando
                // si ya tiene los datos, lo renderiza.
                cupcakes ? (
                    <section className="ed-grid s-grid-2 m-grid-3 lg-grid-4 row-gap">
                        {
                            // no usamos for each porque trabaja en el arreglo original,
                            // map retorna un arreglo nuevo sin tocar al original
                            cupcakes.map (({id, descripcion,sabor, image, color, precio}) => ( // destructucamos c
                                <Cupcake 
                                    key={id}
                                    image = {image}
                                    descripcion = {descripcion}
                                    sabor = {sabor}
                                    color = {color}
                                    precio = {precio}
                                />
                            )) // cada objeto del API renderiza un Cupcake
                        }
                    </section>
                ) : ( //  
                    <span>Cargando...</span>
                )
                
            }
        </div>
    )
}

export default Cupcakes;