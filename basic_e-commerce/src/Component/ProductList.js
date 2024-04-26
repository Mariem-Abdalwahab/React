import { useEffect, useState } from "react";
import Prodcut from "./Product";

function ProductList(){
    let api  ="https://fakestoreapi.com/products";
    let [products, setProducts] = useState([]);
    let [catigories, setcatigories] = useState([]);

    const getProduct =() =>{
        fetch(api)
        .then(res=> res.json())
        .then(data => setProducts(data));
    }

    const getCatigories =() =>{
        fetch(`${api}/categories`)
        .then(res=> res.json())
        .then(data => setcatigories(data));
    }

    const getProductInCategory = (catname)=> {
        console.log(catname);
        fetch(`${api}/category/${catname}`)
        .then(res=> res.json())
        .then(data => setProducts(data));
    }

    useEffect(()=>{
        getProduct();
        getCatigories();
    },[]);


    return( 
        <>
            <h1 className="p-3"> Our Product</h1>
            <div className="container ">
            <button className="btn btn-secondary m-3" onClick={()=>getProduct()} >ALL</button>

                {catigories.map((catigory, index)=>{
                    return(
                        <button className="btn btn-secondary m-3" onClick={()=>getProductInCategory(catigory)} key={index}>{catigory}</button>
                    )
                })
                }
                <div className="row">
                   {products.map((product)=>{
                    return(
                        <div className="col-3" key={product.id}>
                             <Prodcut product={product} btnStatus={true}></Prodcut>
                        </div>
                    )})    
                    }
                   
                </div>
            </div>
        </>
    );
}

export default ProductList;