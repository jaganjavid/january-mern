import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
// import products from "../products";


import Rating from "../components/Rating";



const ProductScreen = () => {

    const [product, setProduct] = useState({});

    const { id } = useParams();

    // const product = products.find((p) => p._id === id);

    useEffect(() => {

        const fetchProduct = async () => {
            
            try{
             const { data } = await axios.get(`http://localhost:5000/api/products/${id}`);
 
             setProduct(data)
            }catch(err){
             console.log(err.message);
            }
 
         }

         fetchProduct();

    },[id]);

    return (
        <>
            <Link to="/">
                <button className="btn btn-outline mt-5">Back</button>
            </Link>

            <div className="flex flex-warp mt-5">
                <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
                    <img width="100%" src={product.image} alt="" />
                </div>
                <div className="w-full md:w-1/2 lg:w-2/3 xl:w-3/4">
                    <div className="w-full bg-base-100">
                        <div className="card-body p-5">
                            <h2 className="card-title text-4xl mb-1">{product.name}</h2>
                            <p className="mb-5">{product.description}</p>
                             <h1 className="text-3xl">{product.price}</h1>
                             <Rating value={product.rating} text={`${product.numReviews} reviews`}/>

                             <span>{product.countInStock > 0 ? "In stock" : "Out of Stock"}</span>

                            <div className="flex gap-5">
                                 <button className="btn btn-outline btn-primary">Add to Cart</button>
                                 <button className="btn btn-primary">Buy</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductScreen