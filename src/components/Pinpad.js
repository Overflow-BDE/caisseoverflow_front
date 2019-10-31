import React from 'react'
import LydiaLogo from '../img/Lydia.png'
import MoneyLogo from '../img/Money.png'

export default class Pinpad extends React.Component {

    render () {
        return <div id="pinpad">
            <div id="pinpad-display">
                10.00  €
            </div>
            <div id="pinpad-transaction">
                <div>
                    <span>Recevoir</span>
                    <img class="paymentlogo" src={LydiaLogo} alt="Lydia" />
                    <img class="paymentlogo" src={MoneyLogo} alt="Lydia" />
                </div>
                <div>
                    <span>Rendre</span>
                    <img class="paymentlogo" src={LydiaLogo} alt="Lydia" />
                    <img class="paymentlogo" src={MoneyLogo} alt="Lydia" />
                </div>
            </div>
            <span id="pinpad-typed">50</span>
            <div id="pinpad-pad">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>&lt;-</span>
                <span>0</span>
                <span>,</span>
            </div>
        </div>;
    }

} 