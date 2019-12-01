import React from 'react'
import Button from '@material-ui/core/Button';
import {removeOperationAction} from '../actions/PinpadAction'
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import PropTypes from "prop-types";

class PinpadOperation extends React.Component {

    static propTypes = {
        operation: PropTypes.object.isRequired
    }

    render() {
        return <li>
            <Button color="primary" onClick={() => this.props.removeOperation({operation: this.props.operation.id})}>x</Button>
            <span style={{marginLeft: '20px'}}>{this.props.operation.toString()}</span>
        </li>;
    }

}

export default connect(
    state => ({}),
    dispatch => ({
        removeOperation: bindActionCreators(removeOperationAction, dispatch)
    })
)(PinpadOperation);