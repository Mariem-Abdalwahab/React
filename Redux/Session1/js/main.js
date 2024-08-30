// console.log(Redux)
// console.log(ReduxThunk)

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

// action as function return object
function fetchProducts(){
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


// getProducts();

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
        console.log ([...action.payload]);
        
        return [...state,...action.payload];
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

const store = Redux.createStore(reducer, Redux.applyMiddleware(ReduxThunk));
// console.log(store);

// console.log(store.getState()); // 1000

store.dispatch(withdraw_money(500)); // -500
// console.log(store.getState()); // 500
store.dispatch(deposite_money(1000)); // +1000
// console.log(store.getState(), "d"); // 1500


store.dispatch(Add_product({id:1, title:"product-1" }));
// console.log("State = ",store.getState());
store.dispatch(fetchProducts());
console.log("State after = ",store.getState());


//////////////////////////////////////

let withdrowMoney = document.querySelector(".withdrowMoney");
let depositeMoney = document.querySelector(".depositeMoney");
let amount = document.querySelector(".amount");
let number = document.querySelector(".number");


store.subscribe(()=>{
    amount.innerHTML = store.getState().Bank;
    console.log("State = ",store.getState());
})

withdrowMoney.addEventListener('click',()=>{
    if(!number.value == 0){
        store.dispatch(withdraw_money(+number.value)); 
        number.value = 0;
    }
});

depositeMoney.addEventListener('click',()=>{
    if(!number.value == 0){
        store.dispatch(deposite_money(+number.value)); 
        number.value = 0;
    }
});