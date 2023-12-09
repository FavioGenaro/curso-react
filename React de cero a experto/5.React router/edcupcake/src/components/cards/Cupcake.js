// import PropTypes from "prop-types"

import {string, number} from "prop-types" // de forma destructurada

const Cupcake = ({descripcion,sabor, image, color, precio}) => {
    //  creamos la tarjeta para cada cupcake
    return(
        <div className="s-radius-1 s-shadow-bottom background s-shadow-card-micro white-color s-pxy-2">
            <img src={image} alt={sabor}/>
            <p>{descripcion}</p>
            <span>Color: {color}</span>
            <span>Precio: {precio}</span>
        </div>
    )

}
Cupcake.propTypes = {
    // podemos colocar colocar varios tipos de datos: bool, function, objeto, symbol, etc.
    // a precio e imagen le doy valores por defecto, por lo que no necesitan ser requeridos
    precio: number, // aqui recien uso lo que importe, inicia en mayuscula
    color:string.isRequired,
    descripcion:string.isRequired,
    sabor:string.isRequired,
    image:string
}

Cupcake.defaultProps ={
    image: "https://i.pinimg.com/736x/b2/fc/49/b2fc4968c73cca735f54685ab1581521--cupcake-heaven-eyebrows.jpg",
    precio: 0
}

export default Cupcake