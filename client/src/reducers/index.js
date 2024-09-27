import { combineReducers } from 'redux';
import fridgeReducer from './fridgeReducer';

export default combineReducers({
  fridge: fridgeReducer,
});
