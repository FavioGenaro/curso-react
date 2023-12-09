
import { Route, Routes, Navigate} from "react-router-dom";
import { AboutScreen } from './AboutScreen'
import { LoginScreen } from "./LoginScreen";
import { HomeScreen } from "./HomeScreen";
import { Navbar } from "./Navbar";
import { UserProvider } from "./context/UserProvider";
export const MainApp = () => {

    // el provider debemos colocar en el lugar más alto de la app, para que todos sus hijos puedan acceder a los datos

    return (
        <UserProvider>
            <h1>Main App</h1>

            <Navbar/>

            <hr/>
            <Routes> {/* componente padre */}
                {/* Componentes hijos
                    - Definimos las rutas y los elementos que van a mostrar
                    - Las rutas podemos colocarlas como /login o /about o sin el /
                */}
                <Route path="/" element = { <HomeScreen/> }/>
                <Route path="login" element = { <LoginScreen/> }/>
                <Route path="about" element = { <AboutScreen/> }/>

                {/* <Route path="/*" element = { <LoginScreen/> }/> por si no existe la ruta */}
                <Route path="/*" element = { <Navigate to="/about"/> }/> 
            </Routes>
        </UserProvider>
    )
}