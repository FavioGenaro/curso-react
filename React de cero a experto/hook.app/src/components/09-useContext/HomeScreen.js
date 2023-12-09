import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const HomeScreen = () => {
    // context
    const {user} = useContext( UserContext );

    return (
        <div>
            {/* añadimos ? por si no existe el user no lo muestra, sino sí */}
            <h1>Home Screen <small>{user?.name}</small> </h1>
            <hr/>

            <pre>
                {JSON.stringify(user, null,3)}
            </pre>
        </div>
    )
}
