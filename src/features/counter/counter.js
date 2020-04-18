import {createStructuredSelector} from 'reselect';

export const NAME = 'counter';

// Action Types
const INCREMENT = '[counter]/INCREMENT';
const DECREMENT = '[counter]/DECREMENT';

// Initial State:
const initialState = {
    value: 10
}

// REDUCER:
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return { ...state, value: ++state.value }
        case actionTypes.DECREMENT:
            return { ...state, value: --state.value }
        default:
            return state
    }
}

function increment() {
    return {type: INCREMENT}
}
function decrement() {
    return {type: DECREMENT}
}

const counter = (state) => state[NAME];

export const selector = createStructuredSelector({
    counter,
})

export const actionCreators = {
    increment,
    decrement,
}

export const actionTypes = {
    INCREMENT,
    DECREMENT,
}
