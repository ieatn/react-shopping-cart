import React from 'react'

// cart page
export default function Cart({ cart, removeFromCart }) {
  return (
    <div>
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
    </div>
  )
}
