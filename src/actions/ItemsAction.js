export const FETCH_ITEMS_ACTION = "FETCH_ITEMS_ACTION";
export const RETREIVED_ITEMS_ACTION = "RETREIVED_ITEMS_ACTION";

export const fetchItemsAction = (payload) => {
    return { type: FETCH_ITEMS_ACTION, payload };
}

export const retreivedItemsAction = (payload = { items: [] }) => {
    return { type: RETREIVED_ITEMS_ACTION, payload };
};