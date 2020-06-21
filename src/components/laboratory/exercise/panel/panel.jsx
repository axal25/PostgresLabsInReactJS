import React, {Component} from "react";
import TextareaAutoresize from "@material-ui/core/TextareaAutosize";

class Panel extends Component {
    state = {};

    render() {
        return (
            <div className={this.props.classNames.divs.panel}>
                {this.renderBtn()}
                {this.renderTextArea()}
            </div>
        );
    }

    renderBtn() {
        return (
            <button
                className={this.props.classNames.buttons.secondary}
                onClick={this.props.onSwitchVisibility}
            >
                {`${this.props.visible ? "Hide" : "Show"} ${this.props.name}`}
            </button>
        );
    }

    renderTextArea() {
        return (
            this.props.visible ? (
                <TextareaAutoresize
                    className={this.props.classNames.textAreas.autoResize}
                    placeholder={"Empty contents"}
                    rowsMin={1}
                    rowsMax={10}
                    width={3 / 4}
                    defaultValue={this.props.text}
                />
            ) : null
        );
    }
}

export default Panel;
