import React, {useState} from "react"
import "./App.css"
import Products from "./Products"

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
  const navigateTo = (thisPage) => {
    setPage(thisPage)
  }

  // => () means return jsx, need a <> for root element for components
  const renderCart = () => (
    <>
      <h1>cart</h1>
      <h2>total: ${sum()}</h2>
      {/* need a div element for jsx */}
      <div className="grid">
        {/* need key for mapping */}
        {cart.map((item, idx) => (
          <div className="product" key={idx}>
            <p>{item.name}</p>
            <p>${item.cost}</p>
            <button onClick={() => remove(item)}>remove</button>
          </div>
        ))}
      </div>
    </>
  )

  return (
    <div className="App"> 
      {/* () => means on click, need this for buttons bc of rerender error */}
      <button onClick={() => navigateTo('cart')}>go to cart ({cart.length})</button>
      <button onClick={() => navigateTo('products')}>products</button>
      {page === 'products' && <Products add={add}/>}
      {page === 'cart' && renderCart()}
    </div>
  )
} 
export default App;
