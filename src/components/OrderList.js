import React from 'react'
import { withRouter } from "react-router-dom";

class OrderList extends React.Component {

    componentDidMount() {
        // @TODO throw the getOrders action
        console.log("mount")
    }

    render() {
        return <span>Hey</span>
    } 

}

export default withRouter(OrderList)