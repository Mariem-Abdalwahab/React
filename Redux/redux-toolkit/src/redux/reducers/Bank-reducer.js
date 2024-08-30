import {withdrawMoney, depositeMoney} from "../actions/bank-actions"


export const BankReducer = (state = 1000, action) => {
    if (action.type == withdrawMoney) {
        return state - action.payload;
    } else if (action.type == depositeMoney) {
        return state + action.payload;
    } else {
        return state;
    }
}