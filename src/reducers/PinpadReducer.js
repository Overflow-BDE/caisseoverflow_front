import { PRESS_NUMBER_ACTION, ADD_OPERATION_ACTION, REMOVE_OPERATION_ACTION, ORDER_VALIDATED_ACCEPTED_ACTION } from "../actions/PinpadAction";
import Operation from "../model/Operation";

const initialState = { key: '', typedField: '', operations: [] }

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

        case ADD_OPERATION_ACTION:
            if (state.typedField.length === 0 || parseFloat(state.typedField) === 0.0) {
                return state
            }
 
            let pl = action.payload
            return { ...state, typedField: '', operations: [...state.operations, new Operation(pl.id, pl.type, state.typedField)]};

        case REMOVE_OPERATION_ACTION:
            return {...state, operations: state.operations.filter(a => a.id !== action.payload.operation)}

        case ORDER_VALIDATED_ACCEPTED_ACTION:
            return { ...state, operations: [], typedField: ''}

        default:
            return state;
    }
}