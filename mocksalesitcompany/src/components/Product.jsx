import React, { useContext } from 'react';
import {CartContext} from "../Features/ContextProvider"
const Product = ({product}) => {
  const {dispatch}= useContext(CartContext);
    return (
    <div className="col">
    <div className="card h-100" >
  <img src={product.thumbnail} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h4 className="card-title">{product.title}</h4>
    <h5 className="card-title">${product.price}</h5>
    <button className="btn btn-primary" onClick={() => dispatch({ type: "Add", product: product})}>Add To Cart</button>

  </div>
</div>
</div>
  )
}

export default Product