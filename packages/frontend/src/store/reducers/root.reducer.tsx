import { combineReducers } from 'redux';
import { auth } from './auth.reducer';
// Root reducer combining multiple reducers
const rootReducer = combineReducers({
    auth
});

export default rootReducer;