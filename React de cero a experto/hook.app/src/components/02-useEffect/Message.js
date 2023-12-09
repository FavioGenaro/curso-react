import { useEffect } from "react"

export const Message = () => {

    useEffect(() =>{
        // console.log('Componente montado');

        const mouseMove = (e) => {
            const coors = {x:e.x, y: e.y}
            console.log(coors)
        }
        window.addEventListener('mousemove', mouseMove)

        return () => { // return es una fase de limpieza
            // console.log('Componente desmontado');
            window.removeEventListener('mousemove', mouseMove)
        }

    }, []) // ejecutamos cuando el componente se muestre por 1ra vez

    return (
        <div>
            <h3>Eres genial!</h3>
        </div>
    )
}


