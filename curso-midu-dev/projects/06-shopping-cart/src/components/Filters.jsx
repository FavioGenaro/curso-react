import { useId, useState } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters';

const Filters = () => {
    // debemos tener una única fuente de la verdad, es decir, no podemos crear estados
    // que compartan mucho con le context, es mejor tenerlo todo centralizado
    // const [minPrice, setMinPrice] = useState(0);

    // useId: genera un identificador único por cada renderizado del componente y 
    // permanece estable entre renders, lo que lo hace ideal para elementos accesibles o referenciados.
    // Sirve para generar IDs únicos en listas o componentes repetitivos: Evitar colisiones de identificadores.

    // No sirve como clave en listas (key), ya que React recomienda usar identificadores estables de los datos y estos se regeneran en cada renderizado.
    const minPriceFilterId = useId();
    const minCategoryFilterId = useId();

    // usamos el custom hooks
    const { filters, setFilters } = useFilters();

    // console.log({
    //     minPriceFilterId,
    //     minCategoryFilterId
    // })

    const handleChangeMinPrice = (e) => {
        // setMinPrice(e.target.value);
        setFilters(prevState => ({
            ...prevState,
            minPrice: e.target.value
        }))
    }

    const handleChangeCategory = (e) => {
        setFilters(prevState => ({
            ...prevState,
            category: e.target.value
        }))
    }

    return (
        <section className="filters">
            <div>
                {/* htmlFor del label e id del input se vinculan por temas de accesibilidad */}
                <label htmlFor={minPriceFilterId}>Price</label>
                <input type="range" id={minPriceFilterId} min={0} max={1000} value={filters.minPrice} onChange={handleChangeMinPrice} />
                <span>{filters.minPrice}</span>
            </div>
            <div>
                <label htmlFor={minCategoryFilterId}>Categoría</label>
                <select id={minCategoryFilterId}  onChange={handleChangeCategory}>
                    <option value='all'>Todas</option>
                    <option value='laptops'>Portátiles</option>
                    <option value='smartphones'>Celulares</option>
                </select>
            </div>
        </section>
    )
}

export default Filters