import { useState } from "react"
import React from 'react'

// products page
export default function Products({ addToCart }) {
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

  return (
    <div>
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
    </div>
  )
}
