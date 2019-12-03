import { fetchItems } from './items'
import { sendOrder, fetchOrders } from './order'
import {takeEvery} from 'redux-saga/effects';

import {FETCH_ITEMS_ACTION} from '../actions/ItemsAction'
import {ORDER_VALIDATED_ACTION} from '../actions/PinpadAction';
import {FETCH_ORDERS_ACTION} from '../actions/OrderAction';

export const URL = ""

export default function* vsaga() {
    yield takeEvery(FETCH_ITEMS_ACTION, fetchItems);
    yield takeEvery(ORDER_VALIDATED_ACTION, sendOrder)
    yield takeEvery(FETCH_ORDERS_ACTION, fetchOrders)
}
