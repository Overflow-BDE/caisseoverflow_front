import React from 'react'
import Button from '@material-ui/core/Button';
import {removeOrderItemAction} from '../actions/OrderAction'
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import PropTypes from "prop-types";

class BoughtItem extends React.Component {

    static propTypes = {
        orderedItem: PropTypes.object.isRequired
    }

    render() {
        return <li>
            <Button color="primary" onClick={() => this.props.removeOrder({item: this.props.orderedItem.item})}>x</Button>
            <span style={{marginLeft: '20px'}}>{this.props.orderedItem.quantity}x {this.props.orderedItem.item.name}</span>
        </li>;
    }

}

export default connect(
    state => ({}),
    dispatch => ({
        removeOrder: bindActionCreators(removeOrderItemAction, dispatch)
    })
)(BoughtItem);