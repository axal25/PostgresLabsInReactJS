import React, {Component} from "react";
import Panel from "./panel/panel.jsx";

class Exercise extends Component {
    state = {
        isAtLeastHalfOfPanelsVisible: false,
        panels: [
            this.props.exerciseData.question
                ? {
                    name: "question",
                    text: this.props.exerciseData.question,
                    visible: false,
                }
                : undefined,
            this.props.exerciseData.result ?
                {
                    name: "result",
                    text: this.props.exerciseData.result,
                    visible: false,
                }
                : undefined,
            this.props.exerciseData.solution ?
                {
                    name: "solution",
                    text: this.props.exerciseData.solution,
                    visible: false,
                }
                : undefined,
        ],
    };

    constructor(props) {
        super(props);
        this.handleSwitchVisibility = this.handleSwitchVisibility.bind(this);
        this.handleSwitchVisibilityAll = this.handleSwitchVisibilityAll.bind(this);
        this.isAtLeastHalfOfPanelsVisibilitySetTo = this.isAtLeastHalfOfPanelsVisibilitySetTo.bind(
            this
        );
        this.getBtnText = this.getBtnText.bind(this);
    }

    render() {
        return (
            <div className={this.props.classNames.divs.exercise}>
                <span className={this.props.classNames.spans.separator}> </span>
                <div>
                    {this.renderTitleAndSubTitle()}
                    {this.renderBtnControllingPanels()}
                    {this.renderPanels()}
                </div>
            </div>
        );
    }

    renderTitleAndSubTitle() {
        return (
            <span className={this.props.classNames.spans.secondary}>
                Exercise {this.props.exerciseData.number}
                {this.renderExerciseSubTitle()}
            </span>
        );
    }

    renderExerciseSubTitle() {
        return (
            this.props.exerciseData.subTitle ? (
                <span className={this.props.classNames.spans.subTitle}>
                        {this.props.exerciseData.subTitle}
                </span>
            ) : null
        );
    }

    renderBtnControllingPanels() {
        return (
            <button
                className={this.props.classNames.buttons.primary.autoSize}
                onClick={this.handleSwitchVisibilityAll}
            >
                {this.getBtnText()}
            </button>
        );
    }

    renderPanels() {
        return (
            this.state.panels.map((panel, index) => (
                panel
                    ? <Panel
                        key={index}
                        name={panel.name}
                        text={panel.text}
                        visible={panel.visible}
                        onSwitchVisibility={() =>
                            this.handleSwitchVisibilityAndRefreshIsAtLeastHalfOfPanelsVisible(
                                index
                            )
                        }
                        classNames={this.props.classNames}
                    />
                    : null
            ))
        );
    }

    getBtnText() {
        return `${this.state.isAtLeastHalfOfPanelsVisible ? "Hide" : "Show"} all`;
    }

    handleSwitchVisibilityAll() {
        if (this.state.panels.length !== 0)
            this.state.panels
                .forEach((panel, index) => panel && this.handleSwitchVisibility(index));
        this.refreshIsAtLeastHalfOfPanelsVisible();
    }

    handleSwitchVisibilityAndRefreshIsAtLeastHalfOfPanelsVisible(index) {
        this.handleSwitchVisibility(index);
        this.refreshIsAtLeastHalfOfPanelsVisible();
    }

    handleSwitchVisibility(index) {
        const panels = this.state.panels;
        panels[index].visible = !panels[index].visible;
        this.setState({panels});
    }

    refreshIsAtLeastHalfOfPanelsVisible() {
        this.setState({
            isAtLeastHalfOfPanelsVisible: this.isAtLeastHalfOfPanelsVisibilitySetTo(
                true
            ),
        });
    }

    isAtLeastHalfOfPanelsVisibilitySetTo(boolean) {
        return (
            this.state.panels.filter((panel) => panel && panel.visible === boolean).length >=
            this.state.panels.filter((panel) => panel).length / 2
        );
    }
}

export default Exercise;
