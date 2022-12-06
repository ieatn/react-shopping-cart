import React from 'react'

// pass in cart and remove function
export default function Cart({cart, remove, sum}) {
  return (
    <div>
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
    </div>
  )
}
