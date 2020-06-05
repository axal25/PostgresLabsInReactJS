import React, {Component} from "react";
import Panel from "./panel/panel.jsx";

class Exercise extends Component {
    state = {
        isAtLeastHalfOfPanelsVisible: false,
        panels: [
            {
                keyIndex: 0,
                name: "question",
                text: this.props.exerciseData.question,
                visible: false,
            },
            {
                keyIndex: 1,
                name: "result",
                text: this.props.exerciseData.result,
                visible: false,
            },
            {
                keyIndex: 2,
                name: "solution",
                text: this.props.exerciseData.solution,
                visible: false,
            },
        ],
    };

    constructor(props) {
        super(props);
        this.state.panels
            .find((panel) => panel.name === "question")
            .text = this.props.exerciseData.question;
        ;
        this.state.panels
            .find((panel) => panel.name === "result")
            .text = this.props.exerciseData.result;
        ;
        this.state.panels
            .find((panel) => panel.name === "solution")
            .text = this.props.exerciseData.solution;
        ;
        this.handleSwitchVisibility = this.handleSwitchVisibility.bind(this);
        this.handleSwitchVisibilityAll = this.handleSwitchVisibilityAll.bind(this);
        this.isAtLeastHalfOfPanelsVisibilitySetTo = this.isAtLeastHalfOfPanelsVisibilitySetTo.bind(
            this
        );
        this.getBtnText = this.getBtnText.bind(this);
    }

    render() {
        return (
            <div className="Exercise">
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
            this.state.panels.map((panel) => (
                <Panel
                    key={panel.keyIndex}
                    name={panel.name}
                    text={panel.text}
                    visible={panel.visible}
                    onSwitchVisibility={() =>
                        this.handleSwitchVisibilityAndRefreshIsAtLeastHalfOfPanelsVisible(
                            panel.keyIndex
                        )
                    }
                    classNames={this.props.classNames}
                />
            ))
        );
    }

    getBtnText() {
        return `${this.state.isAtLeastHalfOfPanelsVisible ? "Hide" : "Show"} all`;
    }

    handleSwitchVisibilityAll() {
        this.state.panels
            .filter(
                (panel) => panel.visible === this.state.isAtLeastHalfOfPanelsVisible
            )
            .forEach((panel) => this.handleSwitchVisibility(panel.keyIndex));
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
            this.state.panels.filter((panel) => panel.visible === boolean).length >=
            this.state.panels.length / 2
        );
    }
}

export default Exercise;
