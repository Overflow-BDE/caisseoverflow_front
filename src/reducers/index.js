import {combineReducers}  from "redux";
import OrderReducer from './OrderReducer'
import PinpadReducer from './PinpadReducer'
import ItemsReducer from './ItemsReducer'

export default combineReducers({
    OrderReducer,
    PinpadReducer,
    ItemsReducer
})