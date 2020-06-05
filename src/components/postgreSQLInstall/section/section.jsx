import React, {Component} from "react";
import Instruction from "./instruction/instruction";

class Section extends Component {
    render() {
        return <div>
            <div>
                {this.renderTitleAndSubTitle()}
                {this.renderContents()}
            </div>
        </div>;
    }

    renderTitleAndSubTitle() {
        return <span className={this.props.classNames.spans.secondary}>
            {`${this.props.number}. `}{this.props.section.title ? this.props.section.title : null}
            {this.renderSubTitle()}
        </span>;
    }

    renderSubTitle() {
        return this.props.section.subTitle
            ? <span className={this.props.classNames.badges.parents.smallText}>
                <span className={this.props.classNames.spans.subTitle}>
                    {this.props.section.subTitle}
                </span>
            </span>
            : null;
    }

    renderContents() {
        const instructions = this.props.section.instructions;
        return instructions && instructions.length !== 0
            ? <div className={this.props.classNames.divs.section}>
                {instructions.map((instruction, index) =>
                    <Instruction classNames={this.props.classNames} key={index} instruction={instruction}/>
                )}
            </div>
            : null;
    }
}

export default Section;