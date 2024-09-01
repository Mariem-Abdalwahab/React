import { createSlice } from "@reduxjs/toolkit";

export const cartSlices = createSlice({
    initialState: [],
    name: "CartSlices",
    reducers: {
        addToCart: (state, action) => {
            const founded = state.find(ele => ele.id === action.payload.id);
            if (founded) {
                ++founded.amount;
            } else {
                const productCopy = { ...action.payload, amount: 1 }
                state.push(productCopy);
            }
        },
        removeFromCart: (state, action) => {
            let flag = 0;
            state.map(ele => {
                if (ele.id == action.payload.id) {
                    if (ele.amount > 1) {
                        --ele.amount;
                    } else {
                        flag = 1;
                    }
                }
            })
            if(flag){
                return state.filter(ele => ele.id != action.payload.id);
            }
        },
        clearCart: (state, action) => {
            return [];
        }
    }
})

export const { addToCart, removeFromCart, clearCart } = cartSlices.actions;
export default cartSlices.reducer;