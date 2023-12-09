import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginScreen = () => {

    // algo es igual al value del useContext UserContext (del UserContext.js)
    // Podemos tener varios UserContext, asi que useContext retornará el más cernano(hacia arriba) a este componente
    // es decir, al primero de sus padres que tenga UserContext.
    // podemos desestructura hola y user, en este caso solo necesitamos user
    // const {user} = useContext( UserContext );
    
    const {user, setUser} = useContext( UserContext ); // destructuramos el useContext

    return (
        <div>
            <h1>Login Screen</h1>
            <hr/>

            <pre>
                {JSON.stringify(user, null,3)}
            </pre>

            <button
                className="btn btn-primary"
                onClick={() => setUser({ // activamos setUser al car clic y se añaden esos datos
                    id: 123,
                    name: 'Favio Saico',
                    email: 'favio@gmail.com'
                })}
            >
                Set user
            </button>

        </div>
    )
}