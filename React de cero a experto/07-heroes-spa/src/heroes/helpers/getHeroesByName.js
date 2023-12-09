import { heroes } from "../data/heroes";

export const getHeroesByName = ( name = '' ) => {

    name = name.toLocaleLowerCase().trim(); // para asegurarme de que no haya espacio adelante y atras

    if (name.length === 0 ) return []; // no busco nada, retorna vacio

    return heroes.filter( // hacemos el filtro, por nombre. toLocaleLowerCase para colocarlo en mayuscula al inicio
        hero => hero.superhero.toLocaleLowerCase().includes(name)
    );
}
