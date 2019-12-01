import { orderValidatedFailedAction, orderValidatedAcceptedAction } from "../actions/PinpadAction"
import { put } from "redux-saga/effects";
import {URL} from './index'

export function* sendOrder(action) {
    let url = URL + "/order"
    
    const res = yield fetch(url, {
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                method: 'POST',
                                body: JSON.stringify(action.payload)
        })

    if (res.status !== 201) {
        yield put(orderValidatedFailedAction())
    } else {
        yield put(orderValidatedAcceptedAction())
    }
}