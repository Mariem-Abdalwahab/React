import {createSlice} from '@reduxjs/toolkit';

export const bankslice = createSlice({
    initialState: 1000,
    name: "BankSlice", // uniqe name
    reducers: {
        withdraw: (state, action)=>{
            return state -  action.payload 
        },
        deposit: (state, action)=>{
            return state + action.payload 
        },
    }

});

console.log(bankslice);


export const {withdraw, deposit} = bankslice.actions;
export default bankslice.reducer;