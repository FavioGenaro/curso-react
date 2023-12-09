// import { useEffect, useState } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";


export const GifGrid = ({ category }) => { // recibe la categoria

    // const [images, setImages] = useState([]); // valor inicial de arreglo vacio

    // con el :images, hacemos que data cambie de nombre a images
    const {data:images,loading} = useFetchGifs(category); // pasamos la categoria como a la función o hook para que realice la petición
    // console.log(data)
    // console.log(loading)


    // recibe dos argumentos
    // useEffect( () => {  // una función a ejecutar
    //     // getGifs();// en este caso ejecutamos la petición
    //     getGifs(category) // retorna como promesa, por lo que podemos usar .then
    //         .then(imgs => setImages(imgs)) // recibe como prirmer argumento el return del getGifs y los pasa a setImages
        
    // }, [category]) // una lista (arreglo) con datos que va a tomar en cuenta cada vez que cambian para ejecutar la función(1er parametro)
    // si colocamos un arreglo vacio, este solo ejecuta la función una sola vez


    // const getGifs = async () => {
    //     const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=IFm8i8SKpet8sVpu7Uzb1q4u0vuRvGEw` // retorna solo 10 gifs
    //     const resp = await fetch (url); // hacemos la petición
    //     const {data} = await resp.json();// almacenamos lo que retorna en formato json, destructuramos data, que es donde estan los gifs

    //     const gifs = data.map(img => { // recorremos la data, img toma el valor de cada gif
    //         return{ // extraemos solo el id, title y url
    //             id: img.id,
    //             title: img.title,
    //             url: img.images?.downsized_medium.url
    //         }
    //     })

    //     // console.log(gifs); // mostramos en consola
    //     setImages(gifs)// el nuevo estado son los gifs que estamos recibiendo (el arreglo contiene todos los objetos)      
    // }
    
    // getGifs();// ejecutamos la petición
    return (
        <>
            <h3>{ category }</h3>
            {/* {loading ? 'Cargando...': 'Data cargada'} */}
            {loading && <p>Loaging...</p>} {/* si loading es true, muestra el p, sino no muestra nada */}
            <div className="card-grid">
                {
                    // usamos images en vez de data, porque cambiamos el nombre
                    images.map((img) => (// recorre el arreglo, destructuramos id y title
                        //<li key = {id}>{title}</li> //key es el id y el nombre es el titulo
                        // <GifGridItem key={img.id} img = {img}/>// en GifGridItem solo recibimos img
                        <GifGridItem 
                            key={img.id} 
                            {...img}
                        /> // con el ...img enviamos directamente las propiedades id, url y title, ya no como objeto único
                    ))
                }
            </div>
        </>
    )
}