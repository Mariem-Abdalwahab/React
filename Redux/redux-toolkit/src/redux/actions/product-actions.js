
export const Add_product = (product) =>{
    return{
        type : "Add_product",
        payload: product

    }
}

// action as function return object
export function fetchProducts(){
    return async(dispatch, getstate) => {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();  
        // console.log("before",getstate());
        // console.log(data,"data");
        
        dispatch({
            type: "Get_products",
            payload: data
        })
        console.log("after",getstate());
        
    }

    
}