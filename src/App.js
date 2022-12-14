import React, {useState} from "react"
import "./App.css"
import Products from "./Products"
import Cart from "./Cart"
import { useEffect } from "react"

const cartStorage = JSON.parse(localStorage.getItem('cart'))

function App() {
  const [cart, setCart] = useState(cartStorage)
  const [page, setPage] = useState('products')

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  // pass in cart array, whenever this arr changes, fire off useeffect
  }, [cart])

  const getCartLength = () => {
    return cart.reduce((sum, {quantity}) => sum + quantity, 0)
  }

  const navigateTo = (thisPage) => {
    setPage(thisPage)
  }

  return (
    <div className="App"> 
      {/* () => means on click, need this for buttons bc of rerender error */}
      <button onClick={() => navigateTo('cart')}>go to cart ({getCartLength()})</button>
      <button onClick={() => navigateTo('products')}>products</button>
      {page === 'products' && <Products cart={cart} setCart={setCart}/>}
      {page === 'cart' && <Cart cart={cart} setCart={setCart}/>}
    </div>
  )
} 
export default App;
