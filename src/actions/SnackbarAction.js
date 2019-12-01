export const TOGGLE_SNACKBAR_ACTION = "TOGGLE_SNACKBAR_ACTION";

export const toggleSnackbarAction = (payload = { open: false, message: '', variant: 'info'}) => {
    return { type: TOGGLE_SNACKBAR_ACTION, payload }
};