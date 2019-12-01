export const PRESS_NUMBER_ACTION   = 'PRESS_NUMBER_ACTION';

export const ADD_OPERATION_ACTION    = 'ADD_OPERATION_ACTION'
export const REMOVE_OPERATION_ACTION = 'REMOVE_OPERATION_ACTION'

export const ORDER_VALIDATED_ACTION          = 'ORDER_VALIDATED_ACTION'
export const ORDER_VALIDATED_ACCEPTED_ACTION = 'ORDER_VALIDATED_ACCEPTED_ACTION'
export const ORDER_VALIDATED_FAILED_ACTION   = 'ORDER_VALIDATED_FAILED_ACTION'

export const pressNumberAction = (payload = { key: '' }) => {
    return { type: PRESS_NUMBER_ACTION, payload };
}

export const addOperationAction = (payload = { id: -1, type: -1 }) => {
    return { type: ADD_OPERATION_ACTION, payload }
}

export const removeOperationAction= (payload = { operation: -1 }) => {
    return { type: REMOVE_OPERATION_ACTION, payload }
}

export const orderValidatedAction = (payload) => {
    return { type: ORDER_VALIDATED_ACTION, payload }
}

export const orderValidatedAcceptedAction= () => {
    return { type: ORDER_VALIDATED_ACCEPTED_ACTION, payload: {} }
}

export const orderValidatedFailedAction= () => {
    return { type: ORDER_VALIDATED_FAILED_ACTION, payload: {} }
}