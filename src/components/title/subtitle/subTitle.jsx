import React, {Component} from "react";

class SubTitle extends Component {
    render() {
        return this.props.subTitle
            ? (
                <span className={this.props.classNames.spans.subTitle}>
                    {this.props.subTitle}
                </span>
            ) : null;
    }
}

export default SubTitle;