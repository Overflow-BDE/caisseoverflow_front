import { fetchItems } from './items'
import { sendOrder } from './order'
import {takeEvery} from 'redux-saga/effects';

import {FETCH_ITEMS_ACTION} from '../actions/ItemsAction'
import { ORDER_VALIDATED_ACTION } from '../actions/PinpadAction';

export const URL = "http://localhost:5555"

export default function* vsaga() {
    yield takeEvery(FETCH_ITEMS_ACTION, fetchItems);
    yield takeEvery(ORDER_VALIDATED_ACTION, sendOrder)
}