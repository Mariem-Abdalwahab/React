import {configureStore} from '@reduxjs/toolkit'; // step 1 to creat store...next on index.js
import productsSlices from './slices/products-slices';
import cartSlices from './slices/cart-slices';

export const store = configureStore({
    reducer:{
        products: productsSlices,
        cart: cartSlices
    }
})

