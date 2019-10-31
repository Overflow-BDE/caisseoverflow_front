import React from 'react'
import Button from '@material-ui/core/Button';

export default class BoughtItem extends React.Component {

    render() {
        return <li>
            <Button color="primary">x</Button>
            <span>1x Crêpe nature</span>
        </li>;
    }

}