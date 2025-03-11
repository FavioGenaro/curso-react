// Lista de estados para realizar los filtros
export const TODO_FILTERS = { // este primer const es de la declaracion de la variable
    ALL: 'all',
    ACTIVE: 'active',
    COMPLETED: 'completed'
} as const // as const para indicar que no se pueden modificar son solo de lectura, este es de TypeScript y afecta a todas las propiedades

export const KEY_CODES = {
    ENTER: 13,
    ESCAPE: 27
} as const