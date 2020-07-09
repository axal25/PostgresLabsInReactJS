import React, {Component} from "react";
import Instruction from "./instruction/instruction";
import TertiaryTitle from "../../../title/tertiaryTitle";
import TitleDataProcessor from "../../../title/subtitle/TitleDataProcessor";

class Section extends Component {
    render() {
        return <div>
            {this.renderTitleAndSubTitle()}
            {this.renderBtn()}
            {this.renderInstructions()}
        </div>;
    }

    renderTitleAndSubTitle() {
        return this.props.section
            ? <TertiaryTitle
                classNames={this.props.classNames}
                title={TitleDataProcessor.getTitle(this.props.section, "Section")}
                subTitle={this.props.section.subTitle}
            />
            : null;
    }

    renderBtn() {
        return <button
            className={this.props.classNames.buttons.tertiary}
            onClick={this.props.onSwitchVisibility}
        >
            {`${this.props.visible ? "Hide" : "Show"} section`}
        </button>
    }

    renderInstructions() {
        const instructions = this.props.section.instructions;
        return instructions && this.props.visible
            ? <div className={this.props.classNames.divs.section}>
                {instructions.map((instruction, instructionIndex) =>
                    <Instruction
                        key={instructionIndex}
                        classNames={this.props.classNames}
                        instruction={instruction}
                    />
                )}
            </div>
            : null;
    }
}

export default Section;