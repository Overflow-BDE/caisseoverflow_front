import { ADD_ORDER_ITEM, REMOVE_ORDER_ITEM } from '../actions/OrderAction'
import {ORDER_VALIDATED_ACCEPTED_ACTION} from '../actions/PinpadAction'

const initialState = { ordered: [] } 

export default function(state = initialState, action) {
    let ordered; // So it fucking stop to cry

    switch (action.type) {
        case ADD_ORDER_ITEM:
            ordered = [...state.ordered];
            let found = false;

            for (let i = 0; i < ordered.length; i++) {
                if (ordered[i].item.id === action.payload.item.id) {
                    ordered[i].quantity++;
                    found = true;
                }
            }

            if (!found) {
                ordered.push({ item: action.payload.item, quantity: 1 });
            }

            return { ordered };

        case REMOVE_ORDER_ITEM:
            ordered = [...state.ordered];
            
            for (let i = 0; i < ordered.length; i++) {
                if (ordered[i].item.id === action.payload.item.id) {
                    ordered[i].quantity--;
                }
            }

            return { ordered: ordered.filter(a => a.quantity > 0 ) };

        case ORDER_VALIDATED_ACCEPTED_ACTION:
            return { ...state, ordered: [] }

        default:
            return state;
    }
}