import { createStore } from 'redux'

// Action Types
const INCREMENT = '[Home]/INCREMENT';
const DECREMENT = '[Home]/DECREMENT';

export const actionTypes = {
    INCREMENT,
    DECREMENT,
}

// Initial State:
const initialState = {
    counter: 10
}

// REDUCER:
const operationReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return { ...state, counter: ++state.counter }
        case actionTypes.DECREMENT:
            return { ...state, counter: --state.counter }
        default:
            return state
    }
}

// STORE
const store = createStore(operationReducer)

export default store;