import { Routes, Route } from "react-router-dom"
import { LoginPage } from "../auth"
import { HeroesRoutes } from "../heroes"
// import { Navbar } from "../ui"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

export const AppRouter = () =>{

    return(
        <>
            {/* definimos las rutas de la pagina, por cada ruta hay una página */}
            <Routes>
                {/* <Route path="marvel" element = { <MarvelPage/> }/>
                <Route path="dc" element = { <DcPage/> }/> */}
                {/* <Route path="login" element = { <LoginPage/> }/> */}
                <Route path="login" element = { 
                    <PublicRoute> {/* este componente verifica la autenticación */}
                        <LoginPage/> {/* si no esta autenticado muestra Login, si lo esta redirige a /marvel */}
                    </PublicRoute>
                }/>


                <Route path="/*" element = { 
                    <PrivateRoute> {/* este componente verifica la autenticación */}
                        <HeroesRoutes/> {/* si esta atenticado, muestra los hijos que en este caso es HeroesRoutes, sino no muestra y retorna a login*/}
                    </PrivateRoute>
                } />

                {/* Cualquier otra ruta irá a HeroesRoutes, que tiene almacenada el resto de rutas */}
                {/* <Route path="/*" element = { <HeroesRoutes/> }/> */}

            </Routes>
        </>
    )
}