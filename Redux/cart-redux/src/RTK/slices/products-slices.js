import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



// create fetch function to  return my products
export const fetchProducts = createAsyncThunk("ProductSlice/fetchProducts", async()=>{
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();  
    return data;
})

// create slice
export const productsSlices = createSlice({
    initialState: [],
    name: "productsSlices",
    reducers: {},
    extraReducers:(builder) =>{
        builder.addCase(fetchProducts.fulfilled, (state,action)=>{ // like switch case
            console.log(state);
            
            return action.payload;
            
        })
    }
});


export const {}  = productsSlices.actions;
export default productsSlices.reducer;


















/*  the main structure for slices in async functions


import { createSlice } from "@reduxjs/toolkit";

const productsSlices = createSlice({
    initialState: [],
    name: "productsSlices",
    reducers: {},
    extraReducers: (builder) =>{ // this function to handel my status from promise

    }
});


export const {}  = productsSlices.actions;
export default productsSlices.reducer;

*/