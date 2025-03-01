import { createContext, useState } from 'react'

// Este es el contexto que tenemos que consumir
// esto lo usamos con el useContext para acceder a los valores
// al usar useContext en un componente se hace una especia de Inyección de dependencias
export const FiltersContext = createContext(); // solo se crea una vez, es un Singleton

// Este es el que nos provee de acceso al contexto
// el provider retorna un componente que envuelve a su children
export function FiltersProvider ({ children }) {

    // Si usamos el useState, estamos colocando un estado al provider
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 250
    })

    return (
        // el value son los datos que vamos a retornar del contexto, 
        // este puede solo información estatica como configuraciones o un estado.

        <FiltersContext.Provider value={{
            filters, // pasamos el estado
            setFilters // pasamos la funcion para cambiar el estado
        }}
        >
            {children}
        </FiltersContext.Provider>
    )
}