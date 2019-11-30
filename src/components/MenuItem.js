import React from 'react';
import PropTypes from "prop-types";
import { withRouter } from "react-router";

class Icon extends React.Component {

    static propTypes = {
        icon: PropTypes.object.isRequired,
        text: PropTypes.string.isRequired,
        selected: PropTypes.bool
      };

    render() {
        return <li className={this.props.selected ? "selected" : ""}>
            {this.props.icon}
            <div>{this.props.text}</div>
        </li>;
    }

}

export default withRouter(Icon);