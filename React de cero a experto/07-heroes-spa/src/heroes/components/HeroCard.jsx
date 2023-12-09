import { Link } from "react-router-dom"

const CharactesByHero = ({ alter_ego, characters}) => {

    // si es igual, entonces no retorna nada
    if( alter_ego === characters ) return ( <></> )
    // por defecto, retorna el characters
    return <p>{characters}</p>

}


export const HeroCard = ({ // recibimos cada una de las props del hero
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters

}) =>{ // debe recibir de parametro a publisher, sea DC o Marvel

    // const charactesByHero = (<p>{characters}</p>); // muestra los characters

    // Variable para almacenar la url de cada una la imagenes
    const heroImgUrl = `/assets/heroes/${id}.jpg`

    return(
        <div className="col  animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={heroImgUrl} className="card-img" alt={superhero} />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero} </h5>
                            <p className="card-text"> {alter_ego}</p>
                            {/* {
                                (alter_ego !== characters) && (charactesByHero)
                            } */}
                            <CharactesByHero characters={characters} alter_ego={alter_ego} />
                            <p className="card-text">
                                <small className="text-muted">{first_appearance}</small>
                            </p>
                            {/* aun tenemos cierta info que mostrar, pero lo haremos en una pantalla aparte */}
                            {/* creamos una etiqueta link, nos dirige a la pagina hero con una argumento que es id
                                esta ruta no mostrará nada, porque no definimos la ruta, solo tenemos a /hero, más no al argumento añadido
                            */}
                            <Link to={`/hero/${id}`}>
                                Más...
                            </Link>

                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    )
}
