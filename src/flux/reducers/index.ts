import { combineReducers } from 'redux';
import healtReducer from './healt.reducer'
import loginReducer from './auth/login.reducer'
import registerReducer from './auth/register.reducer'
import userReducer from './user.reducer'

export default combineReducers({
  healtReducer,
  loginReducer,
  registerReducer,
  userReducer
});
