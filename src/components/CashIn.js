import React from 'react';
import Pinpad from './Pinpad'

import '../css/CashIn.css';
import BoughtItem from './BoughtItem';
import ItemButton from './ItemButton';

import { connect } from "react-redux";


class CashIn extends React.Component {

    render() {
        return <div id="inner-app">
            <div id="leftside">
                <ul id="buylist">
                    { this.props.orderedItems.map(i => <BoughtItem key={i.item.id + i.quantity} orderedItem={i} />) }
                </ul>
                <div id="items">
                    { this.props.items.map(i => <ItemButton key={i.id} item={i} />) }
                </div>

            </div>

            <Pinpad className="pinpad" />
        </div>;
    }

}

export default connect(
    state => ({
        items: state.ItemsReducer.items,
        orderedItems: state.OrderReducer.ordered
    }),
    dispatch => ({})
)(CashIn)