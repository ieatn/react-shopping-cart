import React from 'react'

// pass in cart and remove function
export default function Cart({cart, setCart}) {

  const remove = (e) => {
    setCart(
      // for each i in cart, add i if not the same as item passed in from remove btn
      cart.filter((i) => i !== e)
    )
  }

  // really easy just set cart to empty arr
  const clear = () => {
    setCart([])
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

  return (
    <>
      <h1>cart</h1>
      <h2>total: ${sum()}</h2>
      {/* {condition && render this} to not show btn if nothing in cart */}
      {cart.length > 0 && <button onClick={clear}>Clear Cart</button>}
      {/* need a div element for jsx */}
      <div className="grid">
      {/* need key for mapping */}
      {cart.map((item, idx) => (
      <div className="product" key={idx}>
          <p>{item.name}</p>
          <p>${item.cost}</p>
          <input 
            value={item.quantity} 
            onChange={(e) => 
              setQuantity(item, parseInt(e.target.value))
            }
          >
          </input>
          <button onClick={() => remove(item)}>remove</button>
      </div>
      ))}
      </div>
    </>
  )
}
