import React, {Component} from "react";
import Warning from "../warning/warning";
import SubTitle from "./subtitle/subTitle";

class TertiaryTitle extends Component {
    render() {
        return this.props.title
            ? (
                <span className={this.props.classNames.spans.tertiaryTitle}>
                    {this.props.title}
                    <SubTitle classNames={this.props.classNames} subTitle={this.props.subTitle}/>
                </span>
            )
            : <Warning classNames={this.props.classNames} message={"TertiaryTitle undefined"}/>
    }
}

export default TertiaryTitle;