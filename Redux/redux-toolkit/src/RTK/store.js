import {configureStore} from '@reduxjs/toolkit';
import bankslice from './slices/bank-slice'
import productSlice from './slices/product-slice'
// import Products from '../components/Products';

// import {} from './s'

export const store = configureStore({
    reducer: {
        bank: bankslice,
        product: productSlice,
        
    },
});

