import './App.css';
import { React, useState } from 'react';

// use constants instead of hard coding
const PAGE_PRODUCTS = 'products'
const PAGE_CART = 'cart'

function App() {
  // default products array
  const [products, setProducts] = useState([
    {
      name: 'battery',
      img: 'https://i0.wp.com/vision-forward.org/wp-content/uploads/2018/10/AA-Battery.jpg?fit=1280%2C1280&ssl=1',
      price: '$2.99'
    },
    {
      name: 'blanket',
      img: 'https://m.media-amazon.com/images/I/81-x+F2EsHL.jpg',
      price: '$2.99'
    },

  ])

  // the cart, array to add items into
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    // update cart by creating a new array and appending the product as an object
    // so when you click remove from cart, it only deletes 1 instead of duplicates
    setCart([...cart, { ...product }])
  }

  const removeFromCart = (productToRemove) => {
    // update cart by create new array, don't include any product equal to the input
    setCart(
      cart.filter((product) => product !== productToRemove)
    )
  }

  // toggle pages between products and cart
  const [page, setPage] = useState('products')

  // products page
  const renderProducts = () => (
    <>
      <h1>Products</h1>
        {/* in jsx, map over products array, each item returns a div containing jsx */}
        <div className="products">
          {products.map((item) => (
            <div>
              <h3>{item.name}</h3>
              <h4>{item.price}</h4>
              <img src={item.img} alt="product.name" />
              <button onClick={() => addToCart(item)}>add to cart</button>
            </div>
          ))}
        </div>
    </>
  )
  // cart page
  const renderCart = () => (
    <>
      <h1>Cart</h1>
        <div className="products">
          {/* map over cart and display cart items instead */}
          {cart.map((item) => (
            <div>
              <h3>{item.name}</h3>
              <h4>{item.price}</h4>
              <img src={item.img} alt="product.name" />
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </div>
          ))}
        </div>
    </>
  )
  // pass in a string of either 'products' or 'cart', update page state
  // since page is updated, only one will be rendered
  const navigateTo = (nextPage) => {
    setPage(nextPage)
  }

  return (
    <div className='app'> 
      <header>
        <button onClick={() => navigateTo(PAGE_CART)}>go to cart ({cart.length})</button>
        <button onClick={() => navigateTo(PAGE_PRODUCTS)}>view products</button>
      </header>
      {/* only call render on the one that's equal to page state, display page */}
      {page === PAGE_PRODUCTS && renderProducts()}
      {page === PAGE_CART && renderCart()}
    </div>
  );
}

export default App;
