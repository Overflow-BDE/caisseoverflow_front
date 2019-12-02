import React from 'react'
import { withRouter } from "react-router-dom";

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import '../css/OrderList.css';

class OrderList extends React.Component {

    componentDidMount() {
        // @TODO throw the getOrders action
    }

    render() {
        return <div id="OrderList">
                    <div id="OrderList-Header">
                        <h1>Commandes</h1>
                    </div>
                    <div className="OrderList-Order">
                        <ExpansionPanel>
                            <ExpansionPanelSummary className="OrderList-Order-Header" expandIcon={<ExpandMoreIcon className="OrderList-Order-Expand" />} aria-controls="panel1a-content">
                                <div className="OrderList-Order-Items">
                                    <span>1x Crêpe nature</span> 
                                    <span>2x Crêpe nutella</span> 
                                </div>
                                <span>8€</span>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails className="OrderList-Order-Transactions">
                                <span>Recu lydia (5€)</span>
                                <span>Rendu cash (2€)</span>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </div>
                    <div id="OrderList-Charts">
                        Charts
                    </div>
            </div>
    } 

}

export default withRouter(OrderList)