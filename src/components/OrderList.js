import React from 'react'
import { withRouter } from "react-router-dom";

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import '../css/OrderList.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchOrdersAction } from '../actions/OrderAction';

class OrderList extends React.Component {

    componentDidMount() {
        this.props.fetchOrders()
    }

    render() {
        // Hack dégueux, flemme de comprendre pq ça déconne
        let orders = this.props.orders;
        if (orders == undefined) {
            orders = []
        }

        let fullCount = 0

        let panels = []
        orders.forEach(e => {
            let count = 0;
            let items = []
            e.items.forEach(i => {
                count += (i["quantity"] * i["item_price"]);
                items.push(<span key={e.id+"-"+i.item_name}>{i["quantity"]}x {i["item_name"]}</span>)
            })

            fullCount += count;

            let operations = [];
            e.operations.forEach(o => {
                let ot     = o["operation_type"];
                let text   = (ot === 0 || ot === 1) ? "Reçu par " : "Remboursé par ";
                text += (ot === 1 || ot === 3) ? "Lydia" : "cash";
                operations.push(<span key={e.id+"-"+o.id}>{text} ({(o["amount"]/100).toFixed(2)}€)</span>)
            })

            panels.push(
                    <ExpansionPanel key={e.id} className="OrderList-Order-Element">
                        <ExpansionPanelSummary className="OrderList-Order-Header" expandIcon={<ExpandMoreIcon className="OrderList-Order-Expand" />} aria-controls="panel1a-content">
                            <div className="OrderList-Order-Items">{items}</div>
                            <span>{(count/100).toFixed(2)}€</span>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className="OrderList-Order-Transactions">
                            {operations}
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
        )})

        return <div id="OrderList">
                    <div id="OrderList-Header">
                        <h1>Commandes</h1>
                    </div>
                    <div className="OrderList-Order">
                        {panels}
                    </div>
                    <div id="OrderList-Charts">
                        Charts
                        <h2>Argent récolté: {(fullCount/100).toFixed(2)}€</h2>
                    </div>
            </div>
    } 

}

export default withRouter(connect(
    state => ({
        orders: state.OrderReducer.orders,
    }),
    dispatch => ({
        fetchOrders: bindActionCreators(fetchOrdersAction, dispatch)
    })
)(OrderList))