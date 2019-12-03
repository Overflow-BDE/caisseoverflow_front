import { ADD_ORDER_ITEM_ACTION, REMOVE_ORDER_ITEM_ACTION, RETREIVED_ORDERS_ACTION } from '../actions/OrderAction'
import {ORDER_VALIDATED_ACCEPTED_ACTION} from '../actions/PinpadAction'

// Ordered: current thing in the orders
// Orders: All thing ordered ever
const initialState = { ordered: [], orders: [] } 

export default function(state = initialState, action) {
    let ordered; // So it  stop to fucking cry

    switch (action.type) {
        case ADD_ORDER_ITEM_ACTION:
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

        case REMOVE_ORDER_ITEM_ACTION:
            ordered = [...state.ordered];
            
            for (let i = 0; i < ordered.length; i++) {
                if (ordered[i].item.id === action.payload.item.id) {
                    ordered[i].quantity--;
                }
            }

            return { ordered: ordered.filter(a => a.quantity > 0 ) };

        case ORDER_VALIDATED_ACCEPTED_ACTION:
            return { ...state, ordered: [] }

        case RETREIVED_ORDERS_ACTION:
            return { ...state, orders: [...action.payload.orders] }

        default:
            return state;
    }
}