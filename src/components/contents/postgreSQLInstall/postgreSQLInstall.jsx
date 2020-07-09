import React, {Component} from "react";
import Warning from "../../warning/warning";
import PrimaryTitle from "../../title/primaryTitle";
import Sections from "./section/sections";
import Panels from "../laboratory/exercise/panel/panels";

class PostgreSQLInstall extends Component {
    state = {
        panels: this.props.postgreSQLInstall.panels.map(_ => ({visible: false})),
    };

    render() {
        return (
            <div className={this.props.classNames.divs.postgres}>
                {
                    this.props.postgreSQLInstall
                        ? <React.Fragment>
                            <PrimaryTitle
                                classNames={this.props.classNames}
                                title={this.props.postgreSQLInstall.title}
                                subTitle={this.props.postgreSQLInstall.subTitle}
                            />
                            <Panels
                                classNames={this.props.classNames}
                                name={"PostgreSQLInstall"}
                                panels={this.props.postgreSQLInstall.panels}
                            />
                        </React.Fragment>
                        : <Warning classNames={this.props.classNames} message={"PostgreSQLInstall undefined"}/>
                }
            </div>
        );
    }

    renderSections() {
        const appendedPanels = this.props.postgreSQLInstall
        && this.props.postgreSQLInstall.panels
        && this.state.panels
            ? this.props.postgreSQLInstall.panels.map((panel, panelIndex) => ({
                ...panel,
                visible: this.state.panels[panelIndex].visible,
                index: panelIndex
            }))
            : undefined;
        const sectionsPanel = appendedPanels
            ? appendedPanels.find(panel => panel.name === "sections")
            : undefined;
        return sectionsPanel && sectionsPanel.length !== 0
            ? <Sections
                key={sectionsPanel.index}
                classNames={this.props.classNames}
                name={sectionsPanel.name}
                sections={sectionsPanel.sections}
                visible={sectionsPanel.visible}
                onSwitchVisibility={() =>
                    this.handleSwitchSingleVisibility(
                        sectionsPanel.index
                    )
                }
            />
            : <Warning classNames={this.props.classNames} message={"Sections undefined"}/>;
    }
}

export default PostgreSQLInstall;