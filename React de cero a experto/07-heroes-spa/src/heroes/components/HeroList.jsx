import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers"
import { HeroCard } from "./HeroCard";

export const HeroList = ({publisher}) =>{ // debe recibir de parametro a publisher, sea DC o Marvel

    // heroes es un arreglo con la lista de heroes, según el publisher.
    const heroes = useMemo( ()=> getHeroesByPublisher(publisher), [ publisher ]) // cuando cambia el publisher, se dispara la función

    return(
        <div className="row row-cols-1 row-cols-md-3 g-3">
            {
                // hacemos un map para recorre el arreglo y mostrar todos los heroes
                heroes.map(hero => (
                    // <li key = {hero.id}>
                    //     {hero.superhero}
                    // </li>
                    // Pasamos el componente de HeroCard cada una de las propiedades del hero
                    <HeroCard
                        key={hero.id}
                        {...hero} /* toma cada una de las properties del hero y las exparse, es decir, las pasa al componente */
                    />
                ))
            }
        </div>
    )
}