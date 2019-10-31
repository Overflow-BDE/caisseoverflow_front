import React from 'react'
import { withRouter } from "react-router";

import MenuItem from './MenuItem';
import { CreditCard, AccountBalance, Settings } from '@material-ui/icons';

import '../css/Menu.css'

class Menu extends React.Component {

    render() {
        return <nav>
            <ul>
                <MenuItem icon={<CreditCard />} text="Encaisser" selected={true} />
                <MenuItem icon={<AccountBalance />} text="Comptes" />
                <MenuItem icon={<Settings />} text="Options" />
            </ul>
        </nav>;
    }
    
}

export default withRouter(Menu);