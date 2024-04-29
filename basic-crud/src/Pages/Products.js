import { Button } from "bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Swal from 'sweetalert2';

function Products(){
    const [products, setProducts] = useState([]);

    useEffect(()=>{
         dataProduct();
    });

    const dataProduct = ()=>{
        fetch("http://localhost:9000/products").then(res => res.json()).then(data=>{
            setProducts(data)
        })
    }

    



    function DeleteProduct(product){
        Swal.fire({
            title: `You are going to delete ${product.title}`,
            showCancelButton: true
        }).then(data=>{
            if(data.isConfirmed){
                fetch(`http://localhost:9000/products/${product.id}`,{
                    method: "DELETE"
                }).then(res => res.json())
                .then(data =>{
                    console.log(data);
                    dataProduct();
                })
            }
        })

        
    }

    return(
        <>
            <h1>Products</h1>
            <Link className="mt-2 btn btn-success" to="AddProduct">Add New Product</Link>
            <table className="table table-striped mt-5">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>PRICE</th>
                    <th>OPERATION</th>
                </tr>
                </thead>
                <tbody>
                    {products.map(item=>{
                        return(
                            
                            <tr key={item.id}>

                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.price}$</td>
                                <td>
                                    <Link className="btn btn-danger ms-2" onClick={()=> DeleteProduct(item)}>Delete</Link>
                                    <Link to={`${item.id}`} className="btn btn-info ms-2">View</Link>
                                    <button className="btn btn-primary ms-2">Edit</button>
                                </td>
                            </tr>
                            
                        );
                        
                    })}
                    
                    
                
                </tbody>
                
            </table>
        </>
    )
}

export default Products;