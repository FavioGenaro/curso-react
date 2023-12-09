import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () =>{

    // const categorias = ['One Punch', 'Samurai X', 'Dragon ball']
    const [categorias, setCategorias] = useState(['One Punch']);// solo dejamos un valor

    // const handleAdd = () => {
    //     setCategorias([...categorias,'One piece']) // añade el valor de one piece al arreglo(...categorias son los datos del arreglo actual)
    // }

    return(
        <>
            <h2>GifExpertApp</h2>
            {
                // la prop setCategories recibe la función setCategorias como su valor
            }
            <AddCategory setCategories = {setCategorias}/> 
            <hr/>
            {
            // al dar clik ejecuta la función handleAdd
            // <button onClick={handleAdd}>Agregar</button> 
            }
            
            <ol>
                {
                    categorias.map((category) => (// recorre el arreglo, category tomará cada valor del arreglo
                        // POR CADA CATEGORIA MOSTRARÁ UN GRID CON LOS RESULTADO
                        <GifGrid 
                            key = {category} // debe tener tambien un key
                            category = {category} // 
                        />    
                        //return <li key={category}>{category}</li> // el key es el indice del valor recorrido por el map
                    ))
                }
            </ol>
            
        </>
    )
}

export default GifExpertApp;

