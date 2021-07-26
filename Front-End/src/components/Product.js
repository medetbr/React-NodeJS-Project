import React from "react";
import Raiting from "./Rating"

const Product = (props) => {
   const {product} = props
    return (
        <div key={product._id} className="card">
<a href={`/product/${product._id}`}>
   
   <div className="img"><img className="medium" src={product.image} alt="" /></div>             
</a>
<div className="card-body">
    <a href={`/product/${product._id}`}>
       <h2>{product.description}</h2>
</a>            
                <Raiting rating={product.rating} numReviews={product.numReviews }/>
    <div className="price">{product.price} TL</div>
</div>

</div>
    )
}
export default Product
