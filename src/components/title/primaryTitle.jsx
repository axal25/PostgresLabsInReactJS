import React, {Component} from "react";
import Warning from "../warning/warning";
import SubTitle from "./subtitle/subTitle";

class PrimaryTitle extends Component {
    render() {
        return this.props.title
            ? (
                <h3><span className={this.props.classNames.spans.primaryTitle}>
                    {this.props.title}
                    <SubTitle classNames={this.props.classNames} subTitle={this.props.subTitle}/>
                </span></h3>
            )
            : <Warning classNames={this.props.classNames} message={"PrimaryTitle undefined"}/>
    }
}

export default PrimaryTitle;