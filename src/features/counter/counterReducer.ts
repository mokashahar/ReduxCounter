export interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
};

export const counterReducer = (state: CounterState = initialState, action: any) => {
    switch (action.type) {
        case "increment": {
            return {...state, value: state.value + 1}
        }
        case "decrement": {
            return {...state, value: state.value - 1}
        }
        case "incrementByAmount": {
            return {...state, value: state.value + action.payload}
        }
        default:
            return state;
    }
}

