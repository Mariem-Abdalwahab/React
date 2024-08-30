

export const productReducer = (state = [], action) =>{
    if(action.type == "Get_products"){
        console.log ([...action.payload]);
        
        return [...state,...action.payload];
    }else if(action.type == "Add_product"){
        return [...state, action.payload];
    }else {
    return state;
    }
}