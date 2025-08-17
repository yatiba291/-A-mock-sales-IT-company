import React from 'react'
import { useState } from 'react'
import Data from '../../Data.json'
import Product from '../components/Product.jsx'
const Products = () => {
  const [products] = useState(Data.products)
  return (
    <div className='container mt-5'>
      <div className='row row-colss-1 row-cols-md-3 g-4'>
      {
        products.map(p =>(
          <Product product ={p}/>
        ))


      }

 </div>
    </div>
  )
}

export default Products