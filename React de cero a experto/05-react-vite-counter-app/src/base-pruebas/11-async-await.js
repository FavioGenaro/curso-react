
export const getImagen = async() => {

    try {
        const apiKey = 'rmKHcEx9HqMUxZ1ubUVugb1mTOdVmiO0';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 
        // debería retorna un ulr de un gifs
        const { url } = data.images.original;

        return url; // la url es un string

    } catch (error) {
        // manejo del error
        // console.error(error) // esto imprime un texto en rorjo
        return 'No se encontro la imagen'
    }
}

// getImagen();
