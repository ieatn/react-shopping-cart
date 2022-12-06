import React, {useState} from "react"
import "./App.css"

function App() {
  const [cart, setCart] = useState([])
  const [page, setPage] = useState('products')
  const [products, setProducts] = useState([
    {
      name: 'battery',
      price: '$2.99'
    },
    {
      name: 'blanket',
      price: '$9.99'
    },
  ])
  const add = (e) => {
    // {...item} destructure all properties from passed in object so you can display
    // name and price for cart page, also filters based on id instead of duplicates
    setCart([...cart, {...e}])
  }
  const remove = (e) => {
    setCart(
      // for each i in cart, add i if not the same as item passed in from remove btn
      cart.filter((i) => i !== e)
    )
  }
  const navigateTo = (thisPage) => {
    setPage(thisPage)
  }
  const renderProducts = () => (
    <>
      <h1>products</h1>
      <div className="grid">
        {products.map((item, idx) => (
          <div className="product" key={idx}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <button onClick={() => add(item)}>add</button>
          </div>
        ))}
      </div>
    </>
  )
  // => () means return jsx, need a <> for root element for components
  const renderCart = () => (
    <>
      <h1>cart</h1>
      {/* need a div element for jsx */}
      <div className="grid">
        {/* need key for mapping */}
        {cart.map((item, idx) => (
          <div className="product" key={idx}>
            <p>{item.name}</p>
            <p>{item.price}</p>
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
      {page === 'products' && renderProducts()}
      {page === 'cart' && renderCart()}
    </div>
  )
} 
export default App;
