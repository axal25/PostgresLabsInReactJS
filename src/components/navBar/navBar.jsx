import React, {Component} from "react";

class NavBar extends Component {
    state = {};

    render() {
        return (
            <div className={this.props.classNames.divs.navBar}>
                {this.getInstructionBtn()}
                {this.getGeneratorBtn()}
                {this.getExerciseBtns()}
            </div>
        );
    }

    getInstructionBtn() {
        if (this.props.instructionBtnText) {
            return (
                <button
                    className={this.props.classNames.buttons.primary.autoSize}
                    onClick={() => this.props.onInstructionBtnClick()}
                >{this.props.instructionBtnText}</button>
            );
        } else return (
            <span className={this.props.classNames.spans.warning}>Undefined instructionBtnText</span>
        );
    }

    getExerciseBtns() {
        const laboratoryNumbers = this.props.laboratoryNumbers;
        if (
            !laboratoryNumbers ||
            !laboratoryNumbers.length ||
            laboratoryNumbers.length === 0
        )
            return (
                <span className={this.props.classNames.spans.warning}>No laboratories</span>
            );
        return laboratoryNumbers.map((laboratoryNumber) => (
            <button
                className={this.props.classNames.buttons.primary.setWidth}
                key={laboratoryNumber}
                onClick={() => this.props.onExerciseBtnClick(laboratoryNumber)}
            >
                {`Lab #${laboratoryNumber}`}
            </button>
        ));
    }

    getGeneratorBtn() {
        return (
            <button
                className={this.props.classNames.buttons.primary.autoSize}
                onClick={() => this.props.onGeneratorBtnClick()}
            >
                Generator
            </button>
        );
    }
}

export default NavBar;
