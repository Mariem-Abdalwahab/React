export const withdrawMoney = "withdraw_money";
export const depositeMoney = "deposite_money";


export const withdraw_money = (amount) => {
    return {
        type: "withdraw_money",
        payload: amount
    }
}


export const deposite_money = (amount) => {
    return {
        type: "deposite_money",
        payload: amount

    }
}
