import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct(){ 
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    let navigate = useNavigate();
    const submitForm = (e) =>{
        e.preventDefault();
        fetch(`http://localhost:9000/products`,{
                    method: "POST",
                    body:JSON.stringify({
                        title,
                        price
                    })
                })
                .then(res => res.json())
                .then(data => console.log(data));
                navigate('/products');
    }
    return (
        <>
            <form onSubmit={submitForm}>
                <div className="mb-3">
                    <label htmlFor="Title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="Title" aria-describedby="Title" placeholder="Enter title"
                    onChange={(e) =>{setTitle(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="Price" className="form-label">Price</label>
                    <input type="number" className="form-control" id="Price" aria-describedby="Price" placeholder="Enter price"
                    onChange={(e) =>{setPrice(e.target.value)}}/>
            
                </div>
                <button type="submit" className="btn btn-primary">Add Product</button>
                
            </form>
            
        </>
    )
}
export default AddProduct;