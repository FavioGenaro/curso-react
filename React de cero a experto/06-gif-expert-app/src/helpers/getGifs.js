

export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=IFm8i8SKpet8sVpu7Uzb1q4u0vuRvGEw` // retorna solo 10 gifs
    const resp = await fetch (url); // hacemos la petición
    const {data} = await resp.json();// almacenamos lo que retorna en formato json, destructuramos data, que es donde estan los gifs

    const gifs = data.map(img => { // recorremos la data, img toma el valor de cada gif
        return{ // extraemos solo el id, title y url
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    // console.log(gifs); // mostramos en consola
    // setImages(gifs)// el nuevo estado son los gifs que estamos recibiendo (el arreglo contiene todos los objetos)
    return gifs;// retornamos el arreglo de objetos, pero esto como promesa, por el async      
}