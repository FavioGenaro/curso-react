
import { TODO_FILTERS } from '../consts.js'
import { type FilterValue } from '../types.js'

const FILTERS_BUTTONS = {
    [TODO_FILTERS.ALL]: { literal: 'All', href: `/?filter=${TODO_FILTERS.ALL}` },
    [TODO_FILTERS.ACTIVE]: { literal: 'Active', href: `/?filter=${TODO_FILTERS.ACTIVE}` },
    [TODO_FILTERS.COMPLETED]: { literal: 'Completed', href: `/?filter=${TODO_FILTERS.COMPLETED}` }
} as const

interface Props {
    handleFilterChange: (filter: FilterValue) => void
    // de esta forma podemos asegurar que será un tipo dentro de nuestro constante TODO_FILTERS
    // dentro del [] se extraen los key del objeto TODO_FILTERS
    filterSelected: typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
}

export const Filters: React.FC<Props> = ({ filterSelected, handleFilterChange }) => {

    const handleClick = (filter: FilterValue) => (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        handleFilterChange(filter)
    }

    return (
        <ul className="filters">
            {
                // Object.entries convierte un objeto en un arreglo
                // del arreglo extraemos las keys (ALL, ACTIVE, COMPLETED) y los datos dentro de
                Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
                    const isSelected = key === filterSelected
                    const className = isSelected ? 'selected' : ''

                    return (
                        <li key={key}>
                            <a 
                                href={href}
                                className={className}
                                onClick={handleClick(key as FilterValue)}>{literal}
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    )
}