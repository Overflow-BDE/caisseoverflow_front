export const ADD_ORDER_ITEM = "ADD_ORDER_ITEM";
export const REMOVE_ORDER_ITEM = "REMOVE_ORDER_ITEM";

export const addOrderItem = (payload = { item: null }) => {
    return { type: ADD_ORDER_ITEM, payload };
}

export const removeOrderItem = (payload = { item: null }) => {
    return { type: REMOVE_ORDER_ITEM, payload };
};