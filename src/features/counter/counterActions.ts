export function incrementAction() {
    return {type: "increment"}
}

export function decrementAction() {
    return {type: "decrement"}
}

export function incrementByAmountAction(amount: number) {
    return {type: "incrementByAmount", payload: amount}
}