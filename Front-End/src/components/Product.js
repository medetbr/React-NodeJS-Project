import React from "react";
import { Link } from "react-router-dom";
import Raiting from "./Rating"

const Product = (props) => {
   const {product} = props
    return (
        <div key={product._id} className="card">
<Link to={`/product/${product._id}`}>
   
   <div className="img"><img className="medium" src={product.image} alt="" /></div>             
</Link>
<div className="card-body">
    <Link to={`/product/${product._id}`}>
       <h2>{product.description}</h2>
</Link>            
                <Raiting rating={product.rating} numReviews={product.numReviews }/>
    <div className="price">{product.price} TL</div>
</div>

</div>
    )
}
export default Product
