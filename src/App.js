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

  // add quantities
  const add = (e) => {
    let newCart = [...cart]
    // is this new item identical to existing item in cart?
    let itemInCart = cart.find(item => item.name === e.name)
    // if in cart already, add +1, else create new item and push to cart
    if (itemInCart) {
      // is quantity a built in property or can you declare properties automatically in js?
      itemInCart.quantity++
    } else {
      // wow you can create a whole object instantly, pass in item object
      itemInCart = {
        ...e,
        quantity: 1,
      }
      newCart.push(itemInCart)
      setCart(newCart)
    }
  }

  const remove = (e) => {
    setCart(
      // for each i in cart, add i if not the same as item passed in from remove btn
      cart.filter((i) => i !== e)
    )
  }

  const sum = () => {
    // declare total = sum, destructure cost from object, add cost to sum, default 0
    // ceil(100*n)/100 rounds to 2 decimals
    return Math.ceil(100*cart.reduce((sum, { cost, quantity }) => sum + cost*quantity , 0))/100
  }
  
  const setQuantity = (product, amount) => {
    const newCart = [...cart]
    newCart.find(item => item.name === product.name).quantity = amount
    setCart(newCart)
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
      <button onClick={() => navigateTo('cart')}>go to cart ({getCartLength()})</button>
      <button onClick={() => navigateTo('products')}>products</button>
      {page === 'products' && <Products add={add}/>}
      {page === 'cart' && <Cart cart={cart} remove={remove} sum={sum} clear={clear} setQuantity={setQuantity}/>}
    </div>
  )
} 
export default App;
