import { useReducer } from "react"
import { types } from "../types/types"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"

// const initialState = { // estado inicial
//     logged: false
// }
const init = () => { // recoge info del localStorage y establece el estado inicial
    const user = JSON.parse (localStorage.getItem('user'))

    return{
        logged: !!user, // si el use existe, es true, sino un false
        user: user // puede ser null, si no extie el user.
    }
}

export const AuthProvider = ({children}) =>{ 
    // aqui creamos el reducer
    // destructuramos el authState: es el nuevo estado, despues de realizar una accion
    // y tmb el dispatch(action): que es una función que me permite llamar al authReducer para ejecutar una acción.
    // init: inicializamos el estado, podemos recoger información del localStorage cuando se recarga la pagina y que sea su estado inicial
    const [ authState, dispatch ] = useReducer( authReducer, {}, init ) // pide el reducer(contiene todas las acciones que se pueden realizar) y el estado inicial, que pasa al reducer para cambiarlo

    const login = (name = '') =>{ // este login va a permitir iniciar sesión, recibe el nombre del usuario
        // va a disparar una acción

        // esta función se ejecuta cuando hacemos el login, por lo que aqui pasamos el user a localStorage
        const user = { id: 'ABC',name:name}

        const action = {
            type: types.login,
            payload: user // almacena datos del nuevo usuario logeado, formará parte del nuevo estado que retorna la acción 
        }

        localStorage.setItem('user', JSON.stringify(user))

        dispatch(action) // llamamos la acción
    }

    const logout = () => {
        localStorage.removeItem('user')
        const action = { // ya no tenemos el payload porque el user se borra
            type: types.logout, // realiza la acción de logout
        }
        dispatch(action) // llamamos la acción
    }

    return( // el Provider retorna los valores del authState(los 3 puntos los destructuran) y la función login
        <AuthContext.Provider value={{ ...authState, 
            // methos
            login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
