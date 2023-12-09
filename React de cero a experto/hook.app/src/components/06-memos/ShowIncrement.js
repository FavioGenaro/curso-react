import React from "react";

export const ShowIncrement = React.memo(({increment}) => {  // recibe como prop a la función increment

    console.log('Me volvi a generar :(') 

    return ( // solo tiene un boton
        <button
            className="btn btn-primary"
            onClick={ () => {
                increment(5); // ejecuta el incremento, pasamos 5 como parámetro
            }}
        >
            Incrementar
        </button>
    )
})
