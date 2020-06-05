import React, {Component} from "react";
import AppHeader from "./components/appHeader/appHeader";
import "./App.css";
import NavBar from "./components/navBar/navBar";
import AppFooter from "./components/appFooter/appFooter";
import PostgreSQLInstall from "./components/postgreSQLInstall/postgreSQLInstall";
import Laboratory from "./components/laboratory/laboratory";
import LaboratoriesData from "./data/LaboratoriesData";
import PostgreSQLInstallData from "./data/PostgreSQLInstallData";
import ClassNamesData from "./data/ClassNamesData";

class App extends Component {
    state = {
        currentLaboratoryIndex: undefined,
        laboratoryNumbers: undefined,
        currentLaboratory: undefined,
        isInstructionCurrentlyChosen: false,
        postgreSQLInstall: new PostgreSQLInstallData().postgreSQLInstallData,
        classNames: new ClassNamesData().classNames
    };

    constructor(props) {
        super(props);
        this.onNavBarInstructionBtnClick = this.onNavBarInstructionBtnClick.bind(this);
        this.onNavBarLaboratoryBtnClick = this.onNavBarLaboratoryBtnClick.bind(this);
    }

    componentDidMount() {
        const laboratories = new LaboratoriesData().laboratories;
        const currentLaboratoryIndex = laboratories
            .findIndex((laboratory) => {
                return laboratory && (Object.keys(laboratory).length > 0);
            });
        const laboratoryNumbers = laboratories
            .reduce((laboratoryNumbers, laboratory, index) => {
                    if (laboratory && Object.keys(laboratory).length > 0)
                        laboratoryNumbers.push(index);
                    return laboratoryNumbers;
                },
                []
            );
        const currentLaboratory = laboratories[currentLaboratoryIndex];
        this.setState({currentLaboratoryIndex});
        this.setState({currentLaboratory});
        this.setState({laboratoryNumbers});
    }

    render() {
        return (
            <React.Fragment>
                <div className={this.state.classNames.divs.app}>
                    <AppHeader classNames={this.state.classNames}/>
                    {this.renderNavBar()}
                    {this.renderInstructionOrLaboratory()}
                </div>
                <div className={this.state.classNames.divs.wrapper}>
                    <AppFooter classNames={this.state.classNames}/>
                </div>
            </React.Fragment>
        );
    }

    renderNavBar() {
        return (
            <NavBar
                onInstructionBtnClick={this.onNavBarInstructionBtnClick}
                onExerciseBtnClick={this.onNavBarLaboratoryBtnClick}
                laboratoryNumbers={this.state.laboratoryNumbers}
                instructionBtnText={this.state.postgreSQLInstall.title}
                classNames={this.state.classNames}
            />
        );
    }

    renderInstructionOrLaboratory() {
        return this.state.currentLaboratoryIndex === -1 && this.state.isInstructionCurrentlyChosen
            ? this.renderPostgreSQLInstall()
            : this.renderLaboratory();
    }

    renderPostgreSQLInstall() {
        return <PostgreSQLInstall postgreSQLInstall={this.state.postgreSQLInstall} classNames={this.state.classNames}/>;
    }

    renderLaboratory() {
        return (
            this.state.laboratoryNumbers
                ? <Laboratory
                    laboratoryData={
                        this.state.currentLaboratory
                    }
                    number={
                        this.state.currentLaboratoryIndex
                    }
                    classNames={this.state.classNames}
                />
                : null
        );
    }

    onNavBarInstructionBtnClick() {
        this.setState({currentLaboratoryIndex: -1});
        this.setState({isInstructionCurrentlyChosen: true});
    }

    onNavBarLaboratoryBtnClick(clickedLabIndex) {
        this.setState({currentLaboratoryIndex: clickedLabIndex});
        this.setState({isInstructionCurrentlyChosen: false});
        this.setState({currentLaboratory: new LaboratoriesData().laboratories[clickedLabIndex]});
    }
}

export default App;
