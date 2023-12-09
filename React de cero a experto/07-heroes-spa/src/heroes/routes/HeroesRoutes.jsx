
import { Routes, Route, Navigate } from "react-router-dom"
import { Navbar } from "../../ui"
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages"


export const HeroesRoutes = () =>{

    return(
        <>
            {/* Aquí mostramos el navbar y el resto de rutas */}
            <Navbar/>

            <Routes>
                <Route path="marvel" element = { <MarvelPage/> }/>
                <Route path="dc" element = { <DcPage/> }/>
                {/* para este momento faltan las rutas: Search, Hero by id */}
                <Route path="search" element = { <SearchPage/> }/>
                {/* a la ruta hero le añadimos el comodín /:heroId */}
                <Route path="hero/:heroId" element = { <HeroPage/> }/>

                <Route path="/" element = { <Navigate to ="/marvel"/> }/>

            </Routes>
        </>
    )
}