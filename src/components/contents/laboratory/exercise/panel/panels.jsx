import React, {Component} from "react";
import Sections from "../../../postgreSQLInstall/section/sections";
import Panel from "./panel";

class Panels extends Component {
    state = {
        isAtLeastHalfOfPanelsVisible: false,
        panels: this.props.panels.map(panel => ({...panel, visible: false}))
    };

    constructor(props) {
        super(props);
        this.handleSwitchSingleVisibility = this.handleSwitchSingleVisibility.bind(this);
        this.handleSwitchAllVisibility = this.handleSwitchAllVisibility.bind(this);
    }

    render() {
        console.log("panels - this:");
        console.log(this);
        console.log("panels - this.props.panels:");
        console.log(this.props.panels);
        this.props.panels.forEach((panel, index) => {
            console.log(`index: ${index}, panel:`);
            console.log(panel);
        });
        const panelsVisibility = this.props.panels.map(_ => ({visible: false}));
        console.log("panelsVisibility:");
        console.log(panelsVisibility);
        console.log("panels - this.state.panels:");
        console.log(this.state.panels);
        return <React.Fragment>
            {this.renderBtnControllingAllPanels()}
            {this.renderPanels()}
        </React.Fragment>;
    }

    renderBtnControllingAllPanels() {
        const panels = this.state.panels;
        return panels && panels.length > 1
            ? (
                <button
                    className={this.props.classNames.buttons.primary.autoSize}
                    onClick={this.handleSwitchAllVisibility}
                >
                    {`${this.state.isAtLeastHalfOfPanelsVisible ? "Hide" : "Show"} ${this.props.name}`}
                </button>
            )
            : null;
    }

    renderPanels() {
        const panels = this.props.panels;
        return (
            panels && panels.length !== 0 && this.state.panels && this.state.panels.length === panels.length
                ? panels
                    .map((panel, index) => ({...panel, visible: this.state.panels[index].visible}))
                    .map((appendedPanel, index) => {
                        return appendedPanel.name === "sections"
                            ? this.renderSectionsPanel(appendedPanel, index)
                            : this.renderTextAreaPanel(appendedPanel, index)
                    })
                : null
        );
    }

    renderSectionsPanel(appendedPanel, index) {
        return appendedPanel.sections
        && appendedPanel.sections.length !== 0
            ? <Sections
                key={index}
                classNames={this.props.classNames}
                name={appendedPanel.name}
                sections={appendedPanel.sections}
                visible={appendedPanel.visible}
                onSwitchVisibility={() =>
                    this.handleSwitchSingleVisibility(
                        index
                    )
                }
            />
            : null;
    }

    renderTextAreaPanel(appendedPanel, index) {
        return <Panel
            key={index}
            classNames={this.props.classNames}
            name={appendedPanel.name}
            text={appendedPanel.text}
            visible={appendedPanel.visible}
            onSwitchVisibility={() =>
                this.handleSwitchSingleVisibility(
                    index
                )
            }
        />
    }

    handleSwitchAllVisibility() {
        const panels = [...this.state.panels]
            .map(panel =>
                ({visible: !panel.visible})
            );
        this.setState({panels});
        this.refreshIsAtLeastHalfOfPanelsVisible(panels);
    }

    handleSwitchSingleVisibility(index) {
        const panels = [...this.state.panels];
        panels[index] = {...panels[index]}
        panels[index].visible = !panels[index].visible;
        this.setState({panels});
        this.refreshIsAtLeastHalfOfPanelsVisible(panels);
    }

    refreshIsAtLeastHalfOfPanelsVisible(newStatePanels) {
        const halfPanelsLength = newStatePanels.length / 2.0;
        const visiblePanelsLength = newStatePanels
            .filter(panel => panel.visible)
            .length;
        const isAtLeastHalfOfPanelsVisible = halfPanelsLength <= visiblePanelsLength;
        this.setState({isAtLeastHalfOfPanelsVisible});
    }
}

export default Panels;