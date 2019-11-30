import React from 'react';
import Pinpad from './Pinpad'

import '../css/CashIn.css';
import BoughtItem from './BoughtItem';
import ItemButton from './ItemButton';
import Item from '../model/Item'

import { bindActionCreators } from 'redux';
import { connect } from "react-redux";


class CashIn extends React.Component {

    render() {

        let itemsToSell = [ 
                            new Item(0, 'Crêpe nature', 'https://assets.afcdn.com/recipe/20130914/42772_w1024h768c1cx175cy182.jpg', 0.8), 
                            new Item(1, 'Crêpe au sucre', 'https://www.recettes.net/documents/upload/original/c/r/crepe-au-sucre.jpg', 1),
                            new Item(2, 'Crêpe nutella', 'https://static.750g.com/images/1200-630/b242f1356789bca0050c2f3effc2734a/crepes-au-nutella.jpeg', 1.2),
                          ];


        console.log("CashIn", this.props.orderedItems);

        return <div id="inner-app">
            <div id="leftside">
                <ul id="buylist">
                    { this.props.orderedItems.map(i => <BoughtItem key={i.item.id + i.quantity} orderedItem={i} />) }
                </ul>
                <div id="items">
                    { itemsToSell.map(i => <ItemButton key={i.id} item={i} />) }
                </div>

            </div>

            <Pinpad className="pinpad" />
        </div>;
    }

}

export default connect(
    state => ({
        orderedItems: state.OrderReducer.ordered
    }),
    dispatch => ({})
)(CashIn)