import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';


export const Navbar = () => {

    // obtenmos el nombre del usuario, por medio del context
    const {user = {}} = useContext(AuthContext)
    // const {name = ''} = user; // tambien funciona si el user es underfined

    // cerramos sesión, invocamos a la función logout del reducer
    const { logout } = useContext(AuthContext); // extraemos la función del contexto

    // useNavigate es un custom hook de ReactRouterDom
    // este useNavigate va Navigation.Provider y coger las funciones como retorceder o avanzar a otra pantalla etc.
    const navigate = useNavigate(); 

    // creamos una función que actue cuando damos clik en Logout
    const onLogout = () => {
        
        logout() // ejecutamos la función

        // Pasamos la ruta a la que vamos a ir, que es el To, y agregamos una opción, que en este caso es un replace en true
        // es decir, que al presionar Logout vamos a /login, pero no se guarda en historial, reemplaza la ruta.
        // abramos una nueva pestaña, estamos en /dc, presionamos Logout y al retroceder, nos manda a la nada (nueva pestaña), porque no crea historial de /dc, solo reemplaza la ruta
        navigate('/login', {
            replace: true
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active':'' }` }
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active':'' }` }
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    
                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active':'' }` }
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>
            {/* para de la derecha del navbar */}
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                
                    <span className="nav-item nav-link text-primary">
                        {user?.name /* si el user no tiene la propiedad name, por si el user se pieder al recargar la pagina, no muestra nada */} 
                    </span>

                    <button
                        className="nav-item nav-link btn"
                        onClick={ onLogout }
                    >
                        Logout
                    </button>

                </ul>
            </div>
        </nav>
    )
}