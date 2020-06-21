import React, {Component} from "react";

class Warning extends Component {
    render() {
        return (
            <h5>
                <span className={this.props.classNames.spans.warning}>
                    {this.props.message}
                </span>
            </h5>
        );
    }
}

export default Warning;