import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage, RegisterPage } from "../pages"

export const AuthRoutes = () =>{

    return(
        <Routes>
            {/* Establecemos las rutas para auth */}
            {/* como estan dentro de /auth, el route le agregra el path a la ruta, generando /auth/login y /auth/register */}
            <Route path="login" element={<LoginPage/>} />
            <Route path="register" element={<RegisterPage/>} />

            {/* para cualquiera que no sea login o registro, lo mandamos a login (login esta dentro de /auth, por eso debemos colocar /auth/login)
                navigate necesita de toda la ruta, porque no detecta que estamo en /auth como el route
            */}
            <Route path="/*" element={<Navigate to="/auth/login"/>} />

        </Routes>
    )
}