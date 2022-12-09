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
          cost: 2.99,
          img: 'https://i0.wp.com/vision-forward.org/wp-content/uploads/2018/10/AA-Battery.jpg?fit=1280%2C1280&ssl=1',
          category: 'electronics'
        },
        {
          name: 'blanket',
          cost: 9.99,
          img: 'https://m.media-amazon.com/images/I/81-x+F2EsHL.jpg',
          category: 'home'
        },
    ])
    const [category, setCategory] = useState(['home'])
    const getCategory = () => {
      return products.filter(product => product.category === category)
    }



  return (
    <>
      <h1>products</h1>
      {/* no tag combined with select makes the option button inline and smaller */}
      Select a category
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="home">home</option>
        <option value="electronics">electronics</option>
      </select>
      <div className="grid">
        {getCategory().map((item, idx) => (
          <div className="product" key={idx}>
            <p>{item.name}</p>
            <p>${item.cost}</p>
            <p><img src={item.img} alt="" /></p>
            <button onClick={() => add(item)}>add</button>
          </div>
        ))}
      </div>
    </>
  )
}
