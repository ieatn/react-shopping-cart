import { useState } from "react"
import React from 'react'

export default function Products({cart, setCart}) {
    const [products] = useState([
        {
          name: 'battery',
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

    // add quantities
    const add = (e) => {
      let newCart = [...cart]
      // is this new item identical to existing item in cart?
      let itemInCart = cart.find(item => item.name === e.name)
      // if in cart already, add +1, else create new item and push to cart
      if (itemInCart) {
        // is quantity a built in property or can you declare properties automatically in js?
        itemInCart.quantity++
      } else {
        // wow you can create a whole object instantly, pass in item object
        itemInCart = {
          ...e,
          quantity: 1,
        }
        newCart.push(itemInCart)
        setCart(newCart)
      }
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
