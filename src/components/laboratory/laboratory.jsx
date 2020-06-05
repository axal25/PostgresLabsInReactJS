import React, {Component} from "react";
import Exercise from "./exercise/exercise";

class Laboratory extends Component {
    state = {};

    render() {
        return (
            <div>
                {this.renderNotExistingLaboratory()}
                {this.renderExistingLaboratory()}
            </div>
        );
    }

    renderNotExistingLaboratory() {
        if (!this.props.laboratoryData) {
            return <h3><span className={this.props.classNames.spans.warning}>Laboratory undefined... yet</span></h3>;
        } else return null;
    }

    renderExistingLaboratory() {
        if (this.props.laboratoryData) {
            return (
                <React.Fragment>
                    <h3><span className={this.props.classNames.spans.title}>
                        Laboratory {this.props.number}
                        {this.props.laboratoryData.subTitle ? (
                            <span className={this.props.classNames.spans.subTitle}>
                                {this.props.laboratoryData.subTitle}
                            </span>
                        ) : null}
                    </span></h3>
                    {this.renderNotExistingExercises()}
                    {this.renderExistingExercises()}
                </React.Fragment>
            );
        } else return null;
    }

    renderNotExistingExercises() {
        return (
            !this.props.laboratoryData.exercises || this.props.laboratoryData.exercises.length === 0 ? (
                <h3><span className={this.props.classNames.spans.warning}>
                            No exercises in this laboratory.
                        </span></h3>
            ) : null
        );
    }

    renderExistingExercises() {
        return (
            this.props.laboratoryData.exercises && this.props.laboratoryData.exercises.length !== 0 ? (
                this.props.laboratoryData.exercises.map((exercise) => (
                    <Exercise key={exercise.number} classNames={this.props.classNames} exerciseData={exercise}/>
                ))
            ) : null
        );
    }
}

export default Laboratory;
