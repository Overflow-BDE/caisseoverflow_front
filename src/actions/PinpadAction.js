export const PRESS_NUMBER_ACTION   = 'PRESS_NUMBER_ACTION';

export const SEND_LYDIA_ACTION     = 'SEND_LYDIA_ACTION';
export const SEND_CASH_ACTION      = 'SEND_CASH_ACTION';

export const RETREIVE_LYDIA_ACTION = 'RETREIVE_LYDIA_ACTION';
export const RETREIVE_CASH_ACTION  = 'RETREIVE_CASH_ACTION';

export const pressNumberAction = (payload = { key: '' }) => {
    return { type: PRESS_NUMBER_ACTION, payload };
}

export const sendLydiaAction = (payload = { typedField: ' ' }) => {
    return { type: SEND_LYDIA_ACTION, payload };
}

export const sendCashAction = (payload = { typedField: ' ' }) => {
    return { type: SEND_CASH_ACTION, payload };
}

export const retreiveLydiaAction = (payload = { typedField: ' ' }) => {
    return { type: RETREIVE_LYDIA_ACTION, payload };
}

export const retreiveCashAction = (payload = { typedField: ' ' }) => {
    return { type: RETREIVE_CASH_ACTION, payload };
}