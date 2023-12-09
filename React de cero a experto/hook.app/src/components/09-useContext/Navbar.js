
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {

    return (
        // <>
        //     {/* Link: Permite realizar una navegación sin refresh de la página */}
        //     <Link to="/">Home</Link>
        //     <Link to="/About">About</Link>
        //     <Link to="/Login">Login</Link>
        // </>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounder-3">
            <div className="container-fluid">

                <Link className="navbar-brand" to="/">useContext</Link>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        {/* Usamos navLink para realizar un menú de navegación, permite la agregación de clases css si nos posicionamos en su ruta */}
                        <NavLink
                            // recibe un objeto, al que llamamos args y este contiene variables isActive e isPending 
                            // destructuramos args y añadimos que incluya la clase active si isActive=true, si no regresa vación y solo nos quedamos con nav-link sin active.
                            className={({isActive}) => `nav-link ${ isActive ? 'active' : ''}`}
                            to="/"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            className={({isActive}) => `nav-link ${ isActive ? 'active' : ''}`}
                            to="/about"
                        >
                            About
                        </NavLink>
                        <NavLink
                            className={({isActive}) => `nav-link ${ isActive ? 'active' : ''}`}
                            to="/login"
                        >
                            Login
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
}