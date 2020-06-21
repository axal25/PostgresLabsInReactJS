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
import Generator from "./components/generator/generator";
import Warning from "./components/warning/warning";

class App extends Component {
    state = {
        currentLaboratoryIndex: undefined,
        laboratoryNumbers: undefined,
        currentLaboratory: undefined,
        isInstructionCurrentlyChosen: false,
        isGeneratorCurrentlyChosen: false,
        postgreSQLInstall: PostgreSQLInstallData.getPostgreSQLInstallData(),
        classNames: ClassNamesData.getClassNames()
    };

    constructor(props) {
        super(props);
        this.onNavBarInstructionBtnClick = this.onNavBarInstructionBtnClick.bind(this);
        this.onNavBarLaboratoryBtnClick = this.onNavBarLaboratoryBtnClick.bind(this);
        this.onNavBarGeneratorBtnClick = this.onNavBarGeneratorBtnClick.bind(this);
    }

    componentDidMount() {
        const laboratories = LaboratoriesData.getLaboratories();
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
                onGeneratorBtnClick={this.onNavBarGeneratorBtnClick}
                laboratoryNumbers={this.state.laboratoryNumbers}
                instructionBtnText={this.state.postgreSQLInstall.title}
                classNames={this.state.classNames}
            />
        );
    }

    renderInstructionOrLaboratory() {
        return this.state.currentLaboratoryIndex === -1 && !this.state.isGeneratorCurrentlyChosen && this.state.isInstructionCurrentlyChosen
            ? this.renderPostgreSQLInstall()
            : this.state.currentLaboratoryIndex !== -1 && !this.state.isGeneratorCurrentlyChosen && !this.state.isInstructionCurrentlyChosen
                ? this.renderLaboratory()
                : this.state.currentLaboratoryIndex === -1 && this.state.isGeneratorCurrentlyChosen && !this.state.isInstructionCurrentlyChosen
                    ? this.renderGenerator()
                    : this.renderWarning("Not satisfied requirements to render any main content components (instruction, laboratory or generator).");
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

    renderGenerator() {
        return (
            <Generator classNames={this.state.classNames}/>
        );
    }

    renderWarning(message) {
        return (
            <Warning classNames={this.state.classNames} message={message}/>
        );
    }

    onNavBarInstructionBtnClick() {
        this.setState({currentLaboratoryIndex: -1});
        this.setState({isInstructionCurrentlyChosen: true});
        this.setState({isGeneratorCurrentlyChosen: false});
    }

    onNavBarLaboratoryBtnClick(clickedLabIndex) {
        this.setState({currentLaboratoryIndex: clickedLabIndex});
        this.setState({currentLaboratory: LaboratoriesData.getLaboratories()[clickedLabIndex]});
        this.setState({isInstructionCurrentlyChosen: false});
        this.setState({isGeneratorCurrentlyChosen: false});
    }

    onNavBarGeneratorBtnClick() {
        this.setState({currentLaboratoryIndex: -1});
        this.setState({isInstructionCurrentlyChosen: false});
        this.setState({isGeneratorCurrentlyChosen: true});
    }
}

export default App;
