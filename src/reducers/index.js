import {combineReducers}  from "redux";
import OrderReducer from './OrderReducer'
import PinpadReducer from './PinpadReducer'

export default combineReducers({
    OrderReducer,
    PinpadReducer
})