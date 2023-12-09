import Cupcakes from "./cupcakes";
// import Home from "";
import Servicios from "../sections/Servicios";

const Home = () => (
    <>
        <div className="main-banner img-container dark-color">
            <div className="ed-grid lg-grid-6">
                <div className="lg-cols-4 lg-x-2">
                    <img className="main-banner__img" alt="banner" src="https://images.pexels.com/photos/265614/pexels-photo-265614.jpeg?w=1260&amp;h=750&amp;auto=compress&amp;cs=tinysrgb"/>
                    <div className="main-banner__data s-center">
                        <p className="s-mb-0 t2">Bienvenido a EDcupcake</p>
                        <p>Un sitio lleno de sabor!!!</p>
                        <a className="button" href="#">Modelo de botón</a>
                    </div>
                </div>
            </div>
        </div>
        <Cupcakes peticion="cupcake?sabor_like=fresa"/>
        <Servicios peticion="servicios"/>
    </>
)

export default Home;
