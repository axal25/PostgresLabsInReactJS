import React, {Component} from "react";
import SecondaryTitle from "../../../title/secondaryTitle";
import Panels from "./panel/panels";
import Warning from "../../../warning/warning";
import TitleDataProcessor from "../../../title/subtitle/TitleDataProcessor";

class Exercise extends Component {
    render() {
        console.log(`exercise - ${TitleDataProcessor.getTitle(this.props.exerciseData, "Exercise")} this.props.exerciseData.panels:`)
        console.log(this.props.exerciseData.panels);
        return (
            <div className={this.props.classNames.divs.exercise}>
                <span className={this.props.classNames.spans.separator}/>
                {
                    this.props.exerciseData
                        ? <React.Fragment>
                            <SecondaryTitle
                                classNames={this.props.classNames}
                                title={TitleDataProcessor.getTitle(this.props.exerciseData, "Exercise")}
                                subTitle={this.props.exerciseData.subTitle}
                            />
                            <Panels
                                classNames={this.props.classNames}
                                name={"exercise"}
                                panels={this.props.exerciseData.panels}
                            />
                        </React.Fragment>
                        : <Warning classNames={this.props.classNames} message={"Undefined exercise data"}/>
                }
            </div>
        );
    }
}

export default Exercise;
