import React from 'react';
import Pinpad from './Pinpad'

import '../css/CashIn.css';
import BoughtItem from './BoughtItem';
import Item from './Item';
import CrepeNat from '../img/items/crepes.jpg'

export default class CashIn extends React.Component {

    render() {
        return <div id="inner-app">
            <div id="leftside">
                <ul id="buylist">
                    <BoughtItem />
                    <BoughtItem />
                    <BoughtItem />
                    <BoughtItem />
                    <BoughtItem />
                </ul>
                <div id="items">
                    <Item icon={CrepeNat} title="Crêpe nature adhérent" price="0.8"/>
                    <Item icon="crepenat" title="Crêpe nature" price="0.8"/>
                    <Item icon="crepenat" title="Crêpe nature" price="0.8"/>
                    <Item icon="crepenat" title="Crêpe nature" price="0.8"/>
                </div>

            </div>
            <Pinpad className="pinpad" />
        </div>;
    }

}