import { useContext } from 'react'
import { CartContext } from '../context/cart.jsx'

// esto hook solo retorna los valores que retorna el contexto
export const useCart = () => {
    const context = useContext(CartContext)

    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider')
    }

    return context
}