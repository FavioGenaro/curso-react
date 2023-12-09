import { heroes } from "../data/heroes"

export const getHeroById = (id) => {


    // retornamos el hero que coincida con el id, si no exite regresa un underfined
    return heroes.find(hero => hero.id === id )

}