import React, {useState} from "react"
import "./App.css"
import Products from "./Products"
import Cart from "./Cart"

function App() {
  const [cart, setCart] = useState([])
  const [page, setPage] = useState('products')
  const add = (e) => {
    // {...item} destructure all properties from passed in object so you can display
    // name and cost for cart page, also filters based on id instead of duplicates
    setCart([...cart, {...e}])
  }  
  const remove = (e) => {
    setCart(
      // for each i in cart, add i if not the same as item passed in from remove btn
      cart.filter((i) => i !== e)
    )
  }
  const sum = () => {
    // declare total = sum, destructure cost from object, add cost to sum, default 0
    return cart.reduce((sum, { cost }) => sum + cost , 0)
  }
  // really easy just set cart to empty arr
  const clear = () => {
    setCart([])
  }
  const navigateTo = (thisPage) => {
    setPage(thisPage)
  }

  return (
    <div className="App"> 
      {/* () => means on click, need this for buttons bc of rerender error */}
      <button onClick={() => navigateTo('cart')}>go to cart ({cart.length})</button>
      <button onClick={() => navigateTo('products')}>products</button>
      {page === 'products' && <Products add={add}/>}
      {page === 'cart' && <Cart cart={cart} remove={remove} sum={sum} clear={clear}/>}
    </div>
  )
} 
export default App;
