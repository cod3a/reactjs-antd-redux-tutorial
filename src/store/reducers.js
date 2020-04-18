import {combineReducers} from 'redux';

import counterReducer, {NAME as counterName} from '../features/counter';

export default () => 
    combineReducers({
    [counterName]: counterReducer,
});