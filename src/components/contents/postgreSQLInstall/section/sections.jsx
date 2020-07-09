import React, {Component} from "react";
import Section from "./section";

class Sections extends Component {
    state = {
        isAtLeastHalfOfSectionsVisible: false,
        sections: this.props.sections.map(_ => ({visible: false}))
    };

    constructor(props) {
        super(props);
        this.handleSwitchSingleVisibility = this.handleSwitchSingleVisibility.bind(this);
        this.handleSwitchAllVisibility = this.handleSwitchAllVisibility.bind(this);
    }

    render() {
        return <div>
            {this.renderSectionsBtn()}
            {this.renderSectionsContentsBtn()}
            {this.renderSectionsPanel()}
        </div>;
    }

    renderSectionsBtn() {
        return <button
            className={this.props.classNames.buttons.secondary}
            onClick={this.props.onSwitchVisibility}
        >
            {`${this.props.visible ? "Hide" : "Show"} ${this.props.name}`}
        </button>
    }

    renderSectionsContentsBtn() {
        return this.props.visible && this.state.sections && this.state.sections.length > 1
            ? (
                <button
                    className={this.props.classNames.buttons.primary.autoSize}
                    onClick={this.handleSwitchAllVisibility}
                >
                    {`${this.state.isAtLeastHalfOfSectionsVisible ? "Hide" : "Show"} ${this.props.name}' contents`}
                </button>
            )
            : null;
    }

    renderSectionsPanel() {
        const sections = this.props.sections;
        return sections
        && sections.length !== 0
        && this.props.visible
            ? <div>
                {
                    sections.map((section, sectionIndex) => {
                        const appendedSection = section.number
                            ? {...section}
                            : {...section, number: sectionIndex + 1};
                        return <Section
                            key={sectionIndex}
                            classNames={this.props.classNames}
                            section={appendedSection}
                            visible={this.state.sections[sectionIndex].visible}
                            onSwitchVisibility={() =>
                                this.handleSwitchSingleVisibility(
                                    sectionIndex
                                )
                            }
                        />
                    })
                }
            </div>
            : null;
    }

    handleSwitchAllVisibility() {
        const sections = [...this.state.sections]
            .map(section =>
                ({visible: !section.visible})
            );
        this.setState({sections});
        this.refreshIsAtLeastHalfOfSectionsVisible(sections);
    }

    handleSwitchSingleVisibility(index) {
        const sections = [...this.state.sections];
        sections[index] = {...sections[index]}
        sections[index].visible = !sections[index].visible;
        this.setState({sections});
        this.refreshIsAtLeastHalfOfSectionsVisible(sections);
    }

    refreshIsAtLeastHalfOfSectionsVisible(newStateSections) {
        const halfSectionsLength = newStateSections.length / 2.0;
        const visibleSectionsLength = newStateSections
            .filter(section => section.visible)
            .length;
        const isAtLeastHalfOfSectionsVisible = halfSectionsLength <= visibleSectionsLength;
        this.setState({isAtLeastHalfOfSectionsVisible});
    }
}

export default Sections;