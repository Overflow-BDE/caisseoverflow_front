export const FETCH_ORDERS_ACTION      = "FETCH_ORDERS_ACTION";
export const ADD_ORDER_ITEM_ACTION    = "ADD_ORDER_ITEM_ACTION";
export const RETREIVED_ORDERS_ACTION  = "RETREIVED_ORDERS_ACTION"
export const REMOVE_ORDER_ITEM_ACTION = "REMOVE_ORDER_ITEM_ACTION";

export const addOrderItemAction = (payload = { item: null }) => {
    return { type: ADD_ORDER_ITEM_ACTION, payload };
}

export const removeOrderItemAction = (payload = { item: null }) => {
    return { type: REMOVE_ORDER_ITEM_ACTION, payload };
};

export const fetchOrdersAction = () => {
    return { type: FETCH_ORDERS_ACTION };
}

export const retreivedOrdersAction = (payload = {orders: []}) => {
    return {type: RETREIVED_ORDERS_ACTION, payload};
}