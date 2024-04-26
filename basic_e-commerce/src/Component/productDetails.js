import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Prodcut from "./Product";
function ProductDetails(){
    const params  = useParams();
    console.log(params);
    let api  ="https://fakestoreapi.com/products/";
    let [product, setProduct] = useState({});
    useEffect(()=>{
        fetch(`${api}${params.productId}`)
        .then(res=> res.json())
        .then(data => setProduct(data));
    },[]);
    return(
        <>
            <h1>product details</h1>
            <Prodcut product = {product} btnStatus={false}/>
        </>
    )
}

export default ProductDetails;