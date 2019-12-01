import React from 'react';
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

class Icon extends React.Component {

    static propTypes = {
        icon: PropTypes.object.isRequired,
        text: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired
      };

    render() {
        return <li className={this.props.location.pathname === this.props.path ? "selected" : ""}>
            <Link to={this.props.path}> {this.props.icon} <div>{this.props.text}</div> </Link>
        </li>;
    }

}

export default withRouter(Icon);