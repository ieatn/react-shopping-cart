import React, {useState} from "react"
import "./App.css"
import Products from "./Products"
import Cart from "./Cart"

function App() {
  const [cart, setCart] = useState([])
  const [page, setPage] = useState('products')

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
