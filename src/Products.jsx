// just rfc, copy paste from renderProducts(), delete it, then import this file into app.js
// pass in add to cart function from app to products component using props
// bring in products default array usestate
import { useState } from "react"
import React from 'react'

// when adding in add function props, have to destructure it with {} 
export default function Products({add}) {
    // dont need setProducts function
    const [products] = useState([
        {
          name: 'battery',
          // changed variable name to cost instead of price
          // turn into int for sum function
          cost: 2.99
        },
        {
          name: 'blanket',
          cost: 9.99
        },
    ])
  return (
    <>
      <h1>products</h1>
      <div className="grid">
        {products.map((item, idx) => (
          <div className="product" key={idx}>
            <p>{item.name}</p>
            <p>${item.cost}</p>
            <button onClick={() => add(item)}>add</button>
          </div>
        ))}
      </div>
    </>
  )
}
