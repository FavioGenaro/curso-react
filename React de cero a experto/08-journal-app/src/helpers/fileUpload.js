// subida de un archivo a cloudinary
export const fileUpload = async( file ) => {
    if ( !file ) throw new Error('No tenemos ningúna archivo a subir'); // por si no viene ningun archivo

    const cloudUrl = 'https://api.cloudinary.com/v1_1/djx4e2fdn/upload';

    const formData = new FormData(); // FormData para el envío de datos para la petición tipo post
    formData.append('upload_preset','react-journal');
    formData.append('file', file ); // enviamos el file, con el key 'file' que es lo que cloudinary espera

    try {

        const resp = await fetch( cloudUrl, { // hacemos fetch
            method: 'POST', // metodo POST
            body: formData // el body esta en forma de FormData
        });

        // console.log(resp) // mostramos la respuesta de la petición

        if ( !resp.ok ) throw new Error('No se pudo subir imagen') // error en la subida
        const cloudResp = await resp.json();  // respuesta de cloudinary despues de realizaa la petición
        
        // console.log({cloudResp})// mostramos la respuesta de cloudinary
        return cloudResp.secure_url;

    } catch (error) {
        console.log(error);
        throw new Error( error.message );
    }
}