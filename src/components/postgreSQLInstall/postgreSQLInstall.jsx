import React, {Component} from "react";
import Section from "./section/section";

class PostgreSQLInstall extends Component {
    state = {};

    render() {
        return (
            <div className={this.props.classNames.divs.postgres}>
                {this.renderInstruction()}
                {this.renderSections()}
            </div>
        );
    }

    renderInstruction() {
        return (
            <React.Fragment>
                {this.renderNotExistingInstruction()}
                {this.renderExistingInstructionTitleAndSubTitle()}
            </React.Fragment>
        );
    }

    renderNotExistingInstruction() {
        if (!this.props.postgreSQLInstall) return (
            <h3><span className={this.props.classNames.spans.warning}>Instruction undefined... yet</span></h3>
        );
        else return null;
    }

    renderExistingInstructionTitleAndSubTitle() {
        if (this.props.postgreSQLInstall) return (
            this.props.postgreSQLInstall.title
                ? <h3><span className={this.props.classNames.spans.title}>
                    {this.props.postgreSQLInstall.title}
                    {this.renderSubtitle()}
                </span></h3>
                : <h3><span className={this.props.classNames.spans.warning}>Title undefined</span></h3>
        );
        else return null;
    }

    renderSubtitle() {
        return (
            this.props.postgreSQLInstall.subTitle
                ? <span className={this.props.classNames.spans.subTitle}>
                                {this.props.postgreSQLInstall.subTitle}
                            </span>
                : null
        );
    }

    renderSections() {
        return (
            <React.Fragment>
                {this.renderExistingSections()}
                {this.renderNotExistingSections()}
            </React.Fragment>
        );
    }

    renderExistingSections() {
        const sections = this.props.postgreSQLInstall.sections;
        return sections && sections.length !== 0
            ? sections.map((section, index) =>
                <Section
                    key={index}
                    number={index + 1}
                    section={section}
                    classNames={this.props.classNames}
                />
            )
            : null;
    }


    renderNotExistingSections() {
        return !this.props.postgreSQLInstall.sections || this.props.postgreSQLInstall.sections.length === 0
            ? <h3><span className={this.props.classNames.spans.warning}>
                No sections in the instruction.
            </span></h3>
            : null;
    }
}

export default PostgreSQLInstall;