import { useLocation, useNavigate } from "react-router-dom"
import queryString from 'query-string'
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components/HeroCard"
import { getHeroesByName } from "../helpers"

export const SearchPage = () =>{

    const navigate = useNavigate();
    const location = useLocation();// retorna un objeto donde se encuentra todo el query params en search
    // console.log(location)

    // desestructuramos q, que contiene lo que se busca y si no hay regresa vacío
    const {q=''}= queryString.parse(location.search) // pasamos los query params
    // console.log(query) // tiene separado en piezas los parametros

    const heroes = getHeroesByName(q) // aplicamos el filtro

    const showSearch = (q.length === 0);
    const showError  = (q.length > 0) && heroes.length === 0;

    // searchText es el estado, que es en sí el valor que tiene la caja de texto del formulario
    const { searchText, onInputChange } = useForm({
        searchText: q // el valor inicial del input será el del parametro, para que al recargar la pagina no se borré el valor de la caja de texto
    })

    // se ejecuta al mandar el fomulario
    const onSearchSubmit = (event) => {
        event.preventDefault();
        // if(searchText.trim().length <= 1 ) return; // si es menor a 1 entonces no retorna nada

        // si es más de 1 letra, entonces navegamos, añadimos un query params
        navigate(`?q=${searchText}`)

    }

    return(
        <>
            <h1>SearchPage</h1>
            <hr/>
            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr/>
                    <form onSubmit={onSearchSubmit}>
                        <input 
                            type="text"
                            placeholder="Search a Hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={onInputChange}
                        />
                        <button className="btn btn-outline-primary mt-1">
                            Search
                        </button>
                    </form>
                </div>
                {/* Esta columna muestra los resultados de la busqueda */}
                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>

                    {
                        /* en caso no se realice una busqueda */
                        // (q ==='') ? <div className="alert alert-primary">Search a hero</div> 
                        // : (heroes.length == 0) && <div className="alert alert-danger">No hero with <b>{q}</b></div>
                    }
                    <div className="alert alert-primary animate__animated animate__fadeIn" 
                        style={{ display: showSearch ? '' : 'none' }}>
                    Search a hero
                    </div>

                    <div className="alert alert-danger animate__animated animate__fadeIn" 
                        style={{ display: showError ? '' : 'none' }}>
                    No hero with <b>{ q }</b>
                    </div>

                    {/* <HeroCard/> */}
                    {
                        heroes.map ( hero => (
                            <HeroCard key={hero.id} {...hero}/> // pasamos los parametros a la targeta
                        ) )
                    }
                </div>
            </div>
        </>
    )
}