import React from 'react'
import { Link } from "react-router-dom";

const Product = ({ product }) => {

    return (
       <Link to={`/product/${product._id}`}>
          <div className="card w-full bg-base-100 shadow-xl" key={product._id}>
            <figure className="h-80 object-contain"><img src={`${product.image}`} alt="test" /></figure>
            <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p>{product.description}</p>
            </div>
        </div>
       </Link>
    )
}

export default Product