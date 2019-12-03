import { orderValidatedFailedAction, orderValidatedAcceptedAction } from '../actions/PinpadAction';
import {toggleSnackbarAction} from '../actions/SnackbarAction';
import { put, call } from 'redux-saga/effects';
import {URL} from './index'
import { retreivedOrdersAction } from '../actions/OrderAction';

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
        yield put(toggleSnackbarAction({open: true, message: 'Erreur d\'enregistrement: ' + res.status, variant: 'error'}))
    } else {
        yield put(orderValidatedAcceptedAction())
        yield put(toggleSnackbarAction({open: true, message: 'Enregistré!', variant: 'success'}))
    }
}

export function* fetchOrders(action) {
    let url = URL + "/order"

    const res  = yield fetch(url)
    let orders = yield call([res, 'json']) 
    if (res.status === 200) {
        yield put(retreivedOrdersAction({ orders }))
    } else {
        yield put(toggleSnackbarAction({open: true, message: 'Erreur dans le fetch des orders: ' + res.status, variant: 'error'}))
    }
}