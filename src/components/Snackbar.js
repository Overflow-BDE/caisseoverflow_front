import React from 'react';
import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';
import ErrorIcon from '@material-ui/icons/Error';
import { bindActionCreators } from 'redux';

import { toggleSnackbarAction } from '../actions/SnackbarAction'

const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
  };
  
class MySnackbar extends React.Component {

    // @TODO: Fix colors
    // @See: https://material-ui.com/components/snackbars/
    // @See: App.css @ .snackbar-VARIANT
    render() {
        const Icon = variantIcon[this.props.variant];
        return <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={this.props.snackbarOpen}
                    autoHideDuration={3000}
                    onClose={() => {this.props.toggleSnackbar({open: false})}}
                    message={
                        <span id="client-snackbar" >
                            <Icon className={"snackbar-" + this.props.variant} />
                            {this.props.message}
                        </span>}
                />
    }

}

export default connect(
        state => ({
            snackbarOpen: state.SnackbarReducer.open,
            message: state.SnackbarReducer.message,
            variant: state.SnackbarReducer.variant
        }),
        dispatch => ({
            toggleSnackbar: bindActionCreators(toggleSnackbarAction, dispatch)
        }),
)(MySnackbar)