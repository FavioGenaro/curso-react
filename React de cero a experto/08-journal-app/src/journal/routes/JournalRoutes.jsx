import { Navigate, Route, Routes } from "react-router-dom"
import { JournalPage } from "../pages/JournalPage"

export const JournalRoutes = () =>{

    return(
        <Routes>
            {/* Establecemos las rutas para Journal, este solo es el / */}
            <Route path="/" element={<JournalPage/>} />

            {/* para cualquiera que no sea /, lo mandamos a / */}
            <Route path="/*" element={<Navigate to="/"/>} />


        </Routes>
    )
}
