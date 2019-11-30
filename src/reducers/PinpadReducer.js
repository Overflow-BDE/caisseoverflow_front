import { PRESS_NUMBER_ACTION, SEND_CASH_ACTION, SEND_LYDIA_ACTION, RETREIVE_CASH_ACTION, RETREIVE_LYDIA_ACTION } from "../actions/PinpadAction";

const initialState = { key: '', typedField: '-', transactions: [] }

export default function (state = initialState, action) {
    let typedField;
    switch (action.type) {
        case PRESS_NUMBER_ACTION:
            if (action.payload.key === '<-') {
                typedField = state.typedField;

                if (typedField.length > 0) {
                    typedField = typedField.substring(0, typedField.length - 1);
                }

                return { ...state, typedField }
            } else if (action.payload.key === ',') {
                typedField = state.typedField;
                if (typedField.length > 0) {
                    if (typedField.indexOf(',') < 0) {
                        typedField += ',';
                    }
                } else {
                    typedField = '0,';
                }

                return { ...state, typedField}
            } else {
                return { ...state, typedField: state.typedField += action.payload.key };
            }

        case SEND_CASH_ACTION:
        case SEND_LYDIA_ACTION:
            return {...state};

        case RETREIVE_CASH_ACTION:
        case RETREIVE_LYDIA_ACTION:
            return { ...state };

        default:
            return state;
    }
}