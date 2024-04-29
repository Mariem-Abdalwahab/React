import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Prodcut from "./Product";

function ViewProduct(){
    let {itemid} = useParams();

    const [product, setProduct] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:9000/products/${itemid}`).then(res => res.json()).then(data=>{
            setProduct(data)
        })
    });

    return (
        <>
            <h1>Product Details {itemid}</h1>
            <Prodcut productId={itemid} product={product}></Prodcut>
        </>

    )
}

export default ViewProduct;