import { orderValidatedFailedAction, orderValidatedAcceptedAction } from '../actions/PinpadAction';
import {toggleSnackbarAction} from '../actions/SnackbarAction';
import { put } from 'redux-saga/effects';
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
        yield put(toggleSnackbarAction({open: true, message: 'Erreur d\'enregistrement: ' + res.status, variant: 'error'}))
    } else {
        yield put(orderValidatedAcceptedAction())
        yield put(toggleSnackbarAction({open: true, message: 'Enregistré!', variant: 'success'}))
    }
}