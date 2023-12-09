
import { heroes } from "../data/heroes";

// fitra la data de heroes, según el publisher(DC o Marvel)
export const getHeroesByPublisher = (publisher) => {
    // arreglo que contiene el nombre de los dos tipos de publisher
    const validPublishers = ['DC Comics','Marvel Comics']
    // si el publisher que paso como parametro no existe en el arreglo, da un error
    if( !validPublishers.includes(publisher)){
        throw new Error(`${ publisher } is not valid publisher`);
    }
    // si el publisher que paso como parametro existe en el arreglo, retorna un arreglo con solo la data que pertenezca a ese publisher, sea DC o marvel
    return heroes.filter( heroe => heroe.publisher===publisher)
}
