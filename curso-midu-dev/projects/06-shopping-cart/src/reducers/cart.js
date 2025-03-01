// valor inicial del carrito, lo obtenemos del localstorage
export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

// este es como un enum de acciones
export const CART_ACTION_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CLEAR_CART: 'CLEAR_CART'
}

// update localStorage with state for cart
export const updateLocalStorage = state => {
    window.localStorage.setItem('cart', JSON.stringify(state))
}

// objeto con cada uno de los métodos
const UPDATE_STATE_BY_ACTION = {
    // state es el estado actual y el action tiene el payload con la información necesaria para actualizarlo
    // cada uno de estos tipos retorna una función.
    // esta entre [] para que se conviertan en una propiedad de objeto
    // cada función retorna un nuevo estado que se guarda en el state y genera un pre-render como el useState
    [CART_ACTION_TYPES.ADD_TO_CART]: (state, action) => {
        const { id } = action.payload; // payload representa al producto
        // verificamos que el producto no este en el carrito
        const productInCartIndex = state.findIndex(item => item.id === id);
        
        // en caso este en el carrito
        if (productInCartIndex >= 0) {
            // FORMAS de crear un nuevo arreglo de objetos para actualiza el carrito.

            // 👀 una forma sería usando structuredClone
            // const newState = structuredClone(state)
            // newState[productInCartIndex].quantity += 1

            // 👶 usando el map
            // const newState = state.map(item => {
            //   if (item.id === id) {
            //     return {
            //       ...item,
            //       quantity: item.quantity + 1
            //     }
            //   }

            //   return item
            // })

            // ⚡ usando el spread operator y slice
            const newState = [
                ...state.slice(0, productInCartIndex),
                { ...state[productInCartIndex], quantity: state[productInCartIndex].quantity + 1 },
                ...state.slice(productInCartIndex + 1)
            ];

            updateLocalStorage(newState);
            return newState;
        }
        // como el producto no estaba en el carrito se agrega
        const newState = [
            ...state,
            {
                ...action.payload, // product
                quantity: 1
            }
        ];

        updateLocalStorage(newState);
        return newState;
    },
    [CART_ACTION_TYPES.REMOVE_FROM_CART]: (state, action) => {
        const { id } = action.payload
        const newState = state.filter(item => item.id !== id)
        updateLocalStorage(newState)
        return newState
    },
    [CART_ACTION_TYPES.CLEAR_CART]: () => {
        updateLocalStorage([])
        return []
    }
}

// action contiene el tipo y la data para ejecutar las funciones
// el useReducer recibe el cartInitialState y este es el state
export const cartReducer = (state, action) => {
    const { type: actionType } = action;
    const updateState = UPDATE_STATE_BY_ACTION[actionType]; // retorna la función
    // retorna la ejecución de la función
    return updateState ? updateState(state, action) : state;
}