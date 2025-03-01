import { useReducer, createContext } from 'react'
import { cartReducer, cartInitialState } from '../reducers/cart.js'

export const CartContext = createContext();

function useCartReducer () {
    // retorna el estado y como segundo parámetro un dispatch que envia la acciones al reducer
    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    // el dispatch le pasamos el tipo de acción y el payload que es el producto
    // el dispatch con estos parámetros retorna una función, como esta definido en el cartReducer 
    // dispatch recibe el objeto que representa el ACTION en el cartReducer
    // Cuando se llama dispatch(action), React ejecuta la función reducer(state, action), usando state que ya tiene guardado
    const addToCart = product => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })

    const removeFromCart = product => dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
    })

    const clearCart = () => dispatch({ type: 'CLEAR_CART' })

    return { state, addToCart, removeFromCart, clearCart }
}


// la dependencia de usar React Context
// es MÍNIMA
export function CartProvider ({ children }) {
    const { state, addToCart, removeFromCart, clearCart } = useCartReducer()

    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            removeFromCart,
            clearCart
        }}
        >
            {children}
        </CartContext.Provider>
    )
}