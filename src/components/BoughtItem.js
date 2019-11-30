import React from 'react'
import Button from '@material-ui/core/Button';
import {removeOrderItem} from '../actions/OrderAction'
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import PropTypes from "prop-types";

class BoughtItem extends React.Component {

    static propTypes = {
        orderedItem: PropTypes.object.isRequired
    }

    render() {
        console.log("BoughtItem", this.props.orderedItem);

        return <li>
            <Button color="primary" onClick={() => this.props.removeOrder({item: this.props.orderedItem.item})}>x</Button>
            <span style={{marginLeft: '20px'}}>{this.props.orderedItem.quantity}x {this.props.orderedItem.item.name}</span>
        </li>;
    }

}

export default connect(
    state => ({}),
    dispatch => ({
        removeOrder: bindActionCreators(removeOrderItem, dispatch)
    })
)(BoughtItem);