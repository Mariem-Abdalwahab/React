import { useState, useEffect } from "react";
import productsArr from "../productsData";
import Product from "./Product";
import './ProductsList.css'

function ProductsList(){
    let [products,setproduct] = useState([]);
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(response=> response.json())
        .then(data=> setproduct(data))
    },[])
    

    let productsData = productsArr.map(product => {
        return  product.price >100?(
            // key in the output of map
            <Product key= {product.id} product={product}/>) : null
        
    })
    return(
        <div className="product-list">
            <div className="row">
                {productsData}
            </div>
        </div>
    );
}

export default ProductsList;