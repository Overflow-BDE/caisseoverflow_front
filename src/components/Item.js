import React from 'react'
import PropTypes from "prop-types";

export default class Item extends React.Component {

    static propTypes = {
        icon: PropTypes.object.isRequired,
        price: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    }

    render() {
        return <div class="item">
            <img src={this.props.icon} alt={this.props.title} />
            <span class="item-price">{this.props.price}€</span>
            <span class="item-title">{this.props.title}</span>
        </div>;
    }

}