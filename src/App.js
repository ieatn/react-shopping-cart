import './App.css';
import { React, useEffect, useState } from 'react';
import Products from './Products';
import Cart from './Cart';

// use constants instead of hard coding
const PAGE_PRODUCTS = 'products'
const PAGE_CART = 'cart'

// get item from local storage
const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart'))


function App() {
  // state of cart from local storage, render this
  const [cart, setCart] = useState(cartFromLocalStorage)
  const [page, setPage] = useState('products')

  // every time state changes on screen aka adding or removing from cart state
  // fire useeffect by adding item or removing into local storage
  // the third parameter watches the cart array, call useeffect when cart changes
  useEffect(() => {
    localStorage.setItem('shit', JSON.stringify(cart))
  }, [cart])


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

  const getCartTotal = () => {
    return cart.reduce((sum, { quantity }) => sum + quantity, 0)
  }
  
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
      {/* pass in addtocart function as a prop to products jsx */}
      {page === PAGE_PRODUCTS && <Products addToCart={addToCart} />}
      {page === PAGE_CART && <Cart cart={cart} removeFromCart={removeFromCart} />}
    </div>
  );
}

export default App;
