import { createStore } from 'redux'

import createRootReducer from './reducers';

export default function configureStore({initialState}) {
    const store = createStore(createRootReducer(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    return {store}
}