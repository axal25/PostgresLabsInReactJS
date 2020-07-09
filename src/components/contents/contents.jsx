import React, {Component} from "react";
import SideBar from "./sideBar/sideBar";
import PostgreSQLInstall from "./postgreSQLInstall/postgreSQLInstall";
import Laboratory from "./laboratory/laboratory";
import Generator from "./generator/generator";
import Warning from "../warning/warning";

class Contents extends Component {
    render() {
        return <div className={this.props.classNames.divs.contents}>
            {this.renderSideBar()}
            {this.renderInstructionGeneratorOrLaboratory()}
        </div>
    }

    renderSideBar() {
        return (
            <SideBar
                classNames={this.props.classNames}
                parent={this}
            />
        );
    }

    renderInstructionGeneratorOrLaboratory() {
        return this.props.currentLaboratoryIndex === -1 && !this.props.isGeneratorCurrentlyChosen && this.props.isInstructionCurrentlyChosen
            ? this.renderPostgreSQLInstall()
            : this.props.currentLaboratoryIndex !== -1 && !this.props.isGeneratorCurrentlyChosen && !this.props.isInstructionCurrentlyChosen
                ? this.renderLaboratory()
                : this.props.currentLaboratoryIndex === -1 && this.props.isGeneratorCurrentlyChosen && !this.props.isInstructionCurrentlyChosen
                    ? this.renderGenerator()
                    : this.renderWarning();
    }

    renderPostgreSQLInstall() {
        return (
            this.props.postgreSQLInstall
                ? <PostgreSQLInstall
                    postgreSQLInstall={this.props.postgreSQLInstall}
                    classNames={this.props.classNames}
                />
                : null
        );
    }

    renderLaboratory() {
        const laboratoryData = this.props.currentLaboratory ?
            this.props.currentLaboratory.number
                ? this.props.currentLaboratory
                : {...this.props.currentLaboratory, number: this.props.currentLaboratoryIndex}
            : undefined;
        return (
            laboratoryData
                ? <Laboratory
                    laboratoryData={laboratoryData}
                    classNames={this.props.classNames}
                />
                : null
        );
    }

    renderGenerator() {
        return <Generator classNames={this.props.classNames}/>
    }

    renderWarning() {
        return <Warning
            classNames={this.props.classNames}
            message={"Not satisfied requirements to render any main content components (instruction, laboratory or generator)."}
        />;
    }
}

export default Contents;