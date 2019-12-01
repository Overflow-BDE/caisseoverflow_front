import React from 'react'
import PropTypes from "prop-types";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addOrderItem } from '../actions/OrderAction'
import { URL } from '../saga/index'

class ItemButton extends React.Component {

    static propTypes = {
        item: PropTypes.object.isRequired,
    }

    render() {
        return <div className="item" onClick={() => this.props.addItem({ item: this.props.item }) }>
            <img src={URL + "/assets/" + this.props.item.icon} alt={this.props.item.name} />
            <span className="item-price">{(this.props.item.price/100).toFixed(2)}€</span>
            <span className="item-title">{this.props.item.name}</span>
        </div>;
    }

}

export default connect(
    state => ({}),
    dispatch => ({
        addItem: bindActionCreators(addOrderItem, dispatch)
    })
)(ItemButton)