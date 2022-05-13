import { combineReducers } from 'redux';
import { InputDataReducer } from './InputDataReducer';
import { AuthReducer } from './AuthReducer';

const RootReducer = combineReducers({
	InputDataReducer,
	AuthReducer,
});

export default RootReducer;
