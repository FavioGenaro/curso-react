import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../auth"

// es un componente superior, por lo que recibe como prop a sus propios componentes hijos
// este PublicRoute envolverá a Login, Login será su hijo, pues este 
export const PublicRoute = ({ children }) =>{

    const {logged} = useContext(AuthContext) // sacmos la propiedad logged del context, la usaremos para verificar si esta autenticado


    return(logged)
        ? <Navigate to="/marvel" /> // si esta autenticado, redirige a /marvel, para que muestre las paginas principales
        :  children // si no esta autenticado, muestra sus hijos, que es la pagina de login en sí
}
