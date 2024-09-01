import {createSlice, createAsyncThunk, isFulfilled} from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk("ProductSlice/fetchProducts", async()=>{
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();  
    // console.log(data,"data");
    return data;
})
// export {createSlice} from '@reduxjs/toolkit';

export const productSlice = createSlice({
    initialState: [{id: 1, title:"product oneee"}],
    name: "ProductSlice", // {type: 'ProductSlice/add_product', payload: {…}}
    reducers:{
        add_product: (state,action) => {
            console.log(state);
            console.log(action);
            
            state.push(action.payload);
        },
    },
    extraReducers:(builder) =>{
        builder.addCase(fetchProducts.fulfilled, (state,action)=>{ // like switch case
            return action.payload;
            
        })
    }
})

export default productSlice.reducer;
export const {add_product}  = productSlice.actions;