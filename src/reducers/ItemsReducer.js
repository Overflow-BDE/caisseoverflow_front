import { RETREIVED_ITEMS_ACTION } from "../actions/ItemsAction";


const initialState = { items: [] }

export default function(state = initialState, action) {
    switch (action.type) {
        case RETREIVED_ITEMS_ACTION:
            return { ...state, items: action.payload.items }
        default:
            return state
    }
}