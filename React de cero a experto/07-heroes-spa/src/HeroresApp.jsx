import { AuthProvider } from "./auth"
import { AppRouter } from "./router/AppRouter"

export const HeroresApp = () =>{

    // al ser un punto alto de la aplicación, podemos colocar al Provider, para proveer de información
    return(
        <AuthProvider>
            {/* Al ser el componente principal, que se renderiza en /, debe tener el AppRouter */}
            <AppRouter/>
        </AuthProvider>
    )
}