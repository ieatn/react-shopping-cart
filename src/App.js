import React, {useState} from "react"
import "./App.css"

function App() {
  const [cart, setCart] = useState([])
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
    console.log(cart)
  }
  const renderProducts = () => (
    <>
      <h1>products</h1>
      <div className="grid">
        {products.map((item, idx) => (
          <div className="product" key={idx}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <button onClick={() => add(item.name)}>add</button>
          </div>
        ))}
      </div>
    </>
  )

  return (
    <div className="App"> 
      <button onClick={showCart}>cart ({cart.length})</button>
      <button>products</button>
      {renderProducts()}
    </div>
  )
} 
export default App;
