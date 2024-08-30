import {createStore, applyMiddleware} from 'redux';
import { thunk} from 'redux-thunk';
import {BankReducer} from './reducers/Bank-reducer'
import {productReducer} from './reducers/product-reducer'


import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    Bank: BankReducer,
    product: productReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));
