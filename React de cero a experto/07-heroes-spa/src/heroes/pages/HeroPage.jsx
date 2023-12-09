import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";


export const HeroPage = () =>{

    // extraemos el heroId y en un objeto, llamado rest en este caso, el resto de parametros como el *
    // rest incluso alamacena query params
    // const {heroId, ...rest} = useParams();

    // muestra el *: que es toda la ruta
    // muestra el heroId: que es el comodín que le pasamos a la ruta
    // console.log(heroId);
    // console.log(rest)

    const {heroId} = useParams();

    const hero = useMemo( () => getHeroById(heroId) , [ heroId ]) // solo se dispara la función y retorna un valor si el heroId cambia
    // console.log(hero)

    const navigate = useNavigate();
    const onNavigateBack = () => {
        navigate(-1) // al colocar -1 retrocede a la pagina anterior
    }

    // si el hero no existe, lo que hacemos es mandarlo a 404 o redireccionarlo a otra página
    if( !hero ) {
        // decidimos redireccionar a /marvel
        return <Navigate to="/marvel" />
    }

    return(
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={`/assets/heroes/${heroId}.jpg`}
                    alt={ hero.superhero }
                    className="img-thumbnail col animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-8">
                <h3>{hero.superhero}</h3>
                <ul className="list-grou list-group-flush">
                    <li className="list-group-item"> <b>Alter ego: </b> {hero.alter_ego} </li>
                    <li className="list-group-item"> <b>Publisher: </b> {hero.publisher} </li>
                    <li className="list-group-item"> <b>First first_appearance: </b> {hero.first_appearance} </li>
                </ul>
                <h5 className="mt-3"> Characters </h5>
                <p>{ hero.characters }</p>

                <button 
                    className="btn btn-outline-primary"
                    onClick={onNavigateBack}
                >
                    Regresar
                </button>
            </div>
            
        </div>
    )
}