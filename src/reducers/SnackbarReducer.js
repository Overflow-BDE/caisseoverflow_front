import {TOGGLE_SNACKBAR_ACTION} from '../actions/SnackbarAction'

const initialState = { open: false, message: '', variant: 'info' }

export default function(state = initialState, action) {
    switch (action.type) {

        case TOGGLE_SNACKBAR_ACTION:
            return {...state, ...action.payload }

        default:
            return state
    }
}