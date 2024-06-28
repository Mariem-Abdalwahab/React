console.log(Redux)
// action creator

const withdraw_money = (amount) =>{
    return  {
        type : "withdraw_money",
        payload: amount
    }
}


const deposite_money = (amount) =>{
    return{
        type : "deposite_money",
        payload: amount

    }
}

const Add_product = (product) =>{
    return{
        type : "Add_product",
        payload: product

    }
}

const getProducts = async() =>{
    const data = await fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json));
            console.log(data);
}

getProducts();

const BankReducer = (state = 1000, action) =>{
    if(action.type == "withdraw_money"){
        return state - action.payload;
    }else if(action.type == "deposite_money"){
        return state + action.payload;
    }else {
        return state;
    }
}

const productReducer = (state = [], action) =>{
    if(action.type == "Get_products"){
        return state;
    }else if(action.type == "Add_product"){
        return [...state, action.payload];
    }else {
    return state;
    }
}
const reducer = Redux.combineReducers({
    product:productReducer, 
    Bank: BankReducer
});

const store = Redux.createStore(reducer);
console.log(store);

console.log(store.getState()); // 1000

store.dispatch(withdraw_money(500)); // -500
console.log(store.getState()); // 1000
store.dispatch(deposite_money(1000)); // +1000
console.log(store.getState()); // 1000

store.subscribe(() =>{
    console.log("State = ",store.getState());
})

// 
store.dispatch(Add_product({id:1, title:"product-1" }));
store.dispatch("Get_products");