import { useSelector, useDispatch } from 'react-redux'; 
import {Add_product} from '../redux/actions/product-actions';
import {add_product} from '../RTK/slices/product-slice';
import {fetchProducts} from '../RTK/slices/product-slice';
import { useEffect } from 'react';
// import {fetchProducts} from '../redux/actions/product-actions'

function Products() {
    const stateProduct = useSelector(state => state.product);
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(fetchProducts())
        console.log(fetchProducts())
    
        
    },[]);
    
    return (
        <>
            <h1>Products</h1>
            <button onClick={()=>{dispatch(add_product({id:2,title:"product2"})) }}>Add Product</button>
            {
                stateProduct.map(ele => <h2 key={ele.id}>{ele.title}</h2> )
            }
        </>
    )

}

export default Products;