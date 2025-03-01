
import Cart from './components/Cart';
import { Footer } from './components/Footer';
import Header from './components/Header';
import Products from './components/Products';
import { useFilters } from './hooks/useFilters';
import { products as initialProducts } from './mocks/products.json'
import { useState } from 'react'
import { CartProvider } from './context/cart'

function App() {
  const [products] = useState(initialProducts)
  const {filterProducts} = useFilters(); // del hook obtenemos el método para filtrar
  const filteredProducts = filterProducts(products) // filtramos

  return (
    <CartProvider>
      <Header/>
      <Cart/>
      {/* pasamos la lista de productos filtrados al componente */}
      <Products products={filteredProducts}></Products>
      <Footer/>
    </CartProvider>
  )
}

export default App
