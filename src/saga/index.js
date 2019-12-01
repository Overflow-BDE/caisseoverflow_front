import { fetchItems } from './items'
import {takeEvery} from 'redux-saga/effects';

import {FETCH_ITEMS_ACTION} from '../actions/ItemsAction'

export const URL = "http://localhost:5555"

export default function* vsaga() {
    yield takeEvery(FETCH_ITEMS_ACTION, fetchItems);
}