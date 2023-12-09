import { HeroList } from "../components/HeroList"

export const DcPage = () =>{

    return(
        <>
            <h1>DcPage</h1>
            <hr/>
            {/* Debemos pasarle obligatoriamente el publisher, sino sale el error que creamos */}
            <HeroList publisher='DC Comics'/>
        </>
    )
}