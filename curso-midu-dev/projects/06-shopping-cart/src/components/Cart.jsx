import { useId } from "react"
import { CartIcon, ClearCartIcon } from "./Icons"
import './Cart.css';
import { useCart } from "../hooks/useCart";

function CartItem ({ thumbnail, price, title, quantity, addToCart }) {
    return (
        <li>
            <img
                src={thumbnail}
                alt={title}
            />
            <div>
                <strong>{title}</strong> - ${price}
            </div>
    
            <footer>
                <small>
                    Qty: {quantity}
                </small>
                <button style={{color: '#fff'}} onClick={addToCart}>+</button>
            </footer>
        </li>
    )
}

const Cart = () => {
    const cartCheckboxId = useId();
    const { cart, clearCart,addToCart } = useCart();

    return (
        <>
            <label className='cart-button' htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type='checkbox' hidden />

            <aside className='cart'>
                <ul>
                    {cart.map(product => (
                        <CartItem
                            key={product.id}
                            // le pasamos la función ya con el parámetro para que solo lo ejecute
                            addToCart={() => addToCart(product)}
                            {...product}
                        />
                    ))}
                </ul>
                
                {/* onClick={clearCart} */}
                <button onClick={clearCart}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}

export default Cart

