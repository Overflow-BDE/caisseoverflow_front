import {URL} from './index'
import Item from '../model/Item'
import {call, put} from "redux-saga/effects";
import {retreivedItemsAction} from '../actions/ItemsAction'

export function* fetchItems(action) {
    let url = URL + "/items"

    const res = yield call(fetch, url)
    const itemsReceived = yield call([res, 'json'])

    let items = []
    itemsReceived.forEach(elt => {
        items.push(Item.Cast(elt))
    })
    
    yield put(retreivedItemsAction({ items }))
}