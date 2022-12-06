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
    setCart([...cart, e])
  }
  const showCart = () => {
    setPage('cart')
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
  const renderCart = () => (
    <>
      <h1>cart</h1>
      <div className="grid">
        {cart.map((item, idx) => (
          <div className="product" key={idx}>
            <p>{item.name}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </>
  )

  return (
    <div className="App"> 
      <button onClick={showCart}>go to cart ({cart.length})</button>
      <button>products</button>
      {page === 'products' && renderProducts()}
      {page === 'cart' && renderCart()}
    </div>
  )
} 
export default App;
