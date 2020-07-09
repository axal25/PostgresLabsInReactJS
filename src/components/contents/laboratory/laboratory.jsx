import React, {Component} from "react";
import Exercise from "./exercise/exercise";
import Warning from "../../warning/warning";
import PrimaryTitle from "../../title/primaryTitle";
import TitleDataProcessor from "../../title/subtitle/TitleDataProcessor";

class Laboratory extends Component {
    state = {};

    render() {
        console.log(`Laboratory - ${TitleDataProcessor.getTitle(this.props.laboratoryData, "Laboratory")}`);
        return <div>
            {this.renderTitleAndSubTitle()}
            {this.renderExercises()}
        </div>;
    }

    renderTitleAndSubTitle() {
        return this.props.laboratoryData
            ? <PrimaryTitle
                classNames={this.props.classNames}
                title={TitleDataProcessor.getTitle(this.props.laboratoryData, "Laboratory")}
                subTitle={this.props.laboratoryData.subTitle}
            />
            : <Warning classNames={this.props.classNames} message={"Laboratory undefined"}/>;
    }

    renderExercises() {
        const exercises = this.props.laboratoryData ? this.props.laboratoryData.exercises : undefined;
        return exercises && exercises.length !== 0
            ? (
                this.props.laboratoryData.exercises.map((exercise, exerciseIndex) => {
                    const appendedExercise = exercise.number
                        ? {...exercise}
                        : {...exercise, number: exerciseIndex + 1};
                    return <Exercise
                        key={exerciseIndex}
                        classNames={this.props.classNames}
                        exerciseData={appendedExercise}
                    />
                })
            )
            : <Warning classNames={this.props.classNames} message={"No exercises in this laboratory."}/>;
    }
}

export default Laboratory;
