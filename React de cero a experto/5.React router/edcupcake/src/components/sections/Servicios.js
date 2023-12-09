import useFetch from "../../hooks/useFetch"
const Servicios = ({peticion}) => {

    const [servicios, error] = useFetch(peticion); // devuelde un arreglo, un resulta y un error

    if(error){
        // return <span>Hubo un error</span>
        // podemos mostrar el error, pero lo debemos pasar a string porque es un objeto
        return <span>{JSON.stringify(error)}</span>
    }

    if(!servicios || servicios.lenght === 0){ // si no existe o si es un arreglo vacio, que se establece por defecto en usefetch useState([]), aunque es mejor no ponerlo
        return <span>No hay servicios</span>
    }

    return (
        <div className="ed-grid">
            {
                servicios.map(s => (
                    <div key={s.id}>
                        <h2>{s.nombre}</h2>
                        <p>{s.descripcion}</p>
                    </div>
                ))
            }
        </div>
    )
}
export default Servicios;