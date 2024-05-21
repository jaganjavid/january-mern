import { useEffect, useState } from "react";
import Product from "../components/Product";
// import products from "../products";
import axios from "axios";


const HomeScreen = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        const fetchProducts = async () => {
            
           try{
            const { data } = await axios.get("http://localhost:5000/api/products");

            setProducts(data)
           }catch(err){
            console.log(err.message);
           }

        }

        fetchProducts();

    },[])

    return (
        <>
            <h2 className="text-2xl mt-6">All Products</h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-6">
                {
                    products.map((product) => (
                        <Product product={product}/>
                    ))
                }
            </div>
        </>
    )
}

export default HomeScreen