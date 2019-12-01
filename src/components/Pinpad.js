import React from 'react'
import LydiaLogo from '../img/Lydia.png'
import MoneyLogo from '../img/Money.png'

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { pressNumberAction, addOperationAction, orderValidatedAction } from '../actions/PinpadAction';
import PinpadOperation from './PinpadOperation';
import Order from '../model/Order'

class Pinpad extends React.Component {

    sendOrder() {
        let orderedItems = [];
        this.props.orderedItems.forEach(e => {
            orderedItems.push({id: e.item.id, quantity: e.quantity})
        })

        let operations   = [];
        this.props.operations.forEach(e => {
            operations.push({type: e.type, amt: e.amt})
        })

        let order = new Order(orderedItems, operations);

        this.props.sendOrder(order)
    }

    render () {
        let nextId = this.props.operations.length + 1;
        let price = 0.0;

        for(let i = 0; i < this.props.orderedItems.length; i++) {
            price += (this.props.orderedItems[i].quantity * this.props.orderedItems[i].item.price)
        }

        for (let i = 0; i < this.props.operations.length; i++) {
            let operation = this.props.operations[i]
            if (operation.type === 0 || operation.type === 1) {
                price -= operation.amt
            }

            if (operation.type === 2 || operation.type === 3) {
                price += operation.amt
            }
        }

        let actions;
        if (price === 0.0) {
            actions = <div id="pinpad-transaction">
                        <button disabled={this.props.operations.length === 0} onClick={() => this.sendOrder()}>Valider la transaction</button>
                    </div>
        } else {
            actions = <div id="pinpad-transaction">
                        <div>
                            <span>Recevoir</span>
                            <img className="paymentlogo" src={MoneyLogo} alt="Cash"  onClick={() => this.props.addOperation({type: 0, id: nextId}) } />
                            <img className="paymentlogo" src={LydiaLogo} alt="Lydia" onClick={() => this.props.addOperation({type: 1, id: nextId}) } />
                        </div>
                        <div>
                            <span>Rendre</span>
                            <img className="paymentlogo" src={MoneyLogo} alt="Cash"  onClick={() => this.props.addOperation({type: 2, id: nextId}) } />
                            <img className="paymentlogo" src={LydiaLogo} alt="Lydia" onClick={() => this.props.addOperation({type: 3, id: nextId}) } />
                        </div>
                    </div>
        }

        return <div id="pinpad">
            <div id="pinpad-display">
                {(price/100).toFixed(2)} 
            </div>

            <ul id="pinpad-oplist">
                { this.props.operations.map(i => <PinpadOperation key={i.id} operation={i} />) }
            </ul>

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
                <span onClick={() => this.props.type({key: '.'})}>,</span>
            </div>
            {actions}
        </div>;
    }

} 

export default connect(
    state => ({
        orderedItems: state.OrderReducer.ordered,
        typed: state.PinpadReducer.typedField,
        operations: state.PinpadReducer.operations
    }),
    dispatch => ({
        type: bindActionCreators(pressNumberAction, dispatch),
        addOperation: bindActionCreators(addOperationAction, dispatch),
        sendOrder: bindActionCreators(orderValidatedAction, dispatch)
    })
)(Pinpad);