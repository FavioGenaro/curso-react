import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../auth"

// es un componente superior, por lo que recibe como prop a sus propios componentes hijos
export const PrivateRoute = ({ children }) =>{

    const {logged} = useContext(AuthContext) // sacamos la propiedad logged del context, la usaremos para verificar si esta autenticado
    const {pathname, search} = useLocation(); // usamos el hook y extraemos su valores, la ruta o pathname y search con lo query params si los hubiera

    const lastPath = pathname + search; // enlace completo, sino realizamos busqueda, search=''
    localStorage.setItem('lastPath', lastPath) // guardamos en local storage

    return(logged)
        ? children // si esta autenticado, muestra los hijos
        : <Navigate to="/login" /> // si no esta autenticado, saca al usuario al login
}
