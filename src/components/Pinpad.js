import React from 'react'
import LydiaLogo from '../img/Lydia.png'
import MoneyLogo from '../img/Money.png'

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { pressNumberAction } from '../actions/PinpadAction';

class Pinpad extends React.Component {

    render () {
        let price = 0.0;

        for(let i = 0; i < this.props.orderedItems.length; i++) {
            price += (this.props.orderedItems[i].quantity * this.props.orderedItems[i].item.price)
        }

        return <div id="pinpad">
            <div id="pinpad-display">
                {price.toFixed(2)} 
            </div>
            <div id="pinpad-transaction">
                <div>
                    <span>Recevoir</span>
                    <img className="paymentlogo" src={LydiaLogo} alt="Lydia" />
                    <img className="paymentlogo" src={MoneyLogo} alt="Lydia" />
                </div>
                <div>
                    <span>Rendre</span>
                    <img className="paymentlogo" src={LydiaLogo} alt="Lydia" />
                    <img className="paymentlogo" src={MoneyLogo} alt="Lydia" />
                </div>
            </div>
            <span id="pinpad-typed">{this.props.typed}</span>
            <div id="pinpad-pad">
                <span onClick={() => this.props.type({key: '1'})}>1</span>
                <span onClick={() => this.props.type({key: '2'})}>2</span>
                <span onClick={() => this.props.type({key: '3'})}>3</span>
                <span onClick={() => this.props.type({key: '4'})}>4</span>
                <span onClick={() => this.props.type({key: '5'})}>5</span>
                <span onClick={() => this.props.type({key: '6'})}>6</span>
                <span onClick={() => this.props.type({key: '7'})}>7</span>
                <span onClick={() => this.props.type({key: '8'})}>8</span>
                <span onClick={() => this.props.type({key: '9'})}>9</span>
                <span onClick={() => this.props.type({key: '<-'})}>&lt;-</span>
                <span onClick={() => this.props.type({key: '0'})}>0</span>
                <span onClick={() => this.props.type({key: ','})}>,</span>
            </div>
        </div>;
    }

} 

export default connect(
    state => ({
        orderedItems: state.OrderReducer.ordered,
        typed: state.PinpadReducer.typedField
    }),
    dispatch => ({
        type: bindActionCreators(pressNumberAction, dispatch)
    })
)(Pinpad);