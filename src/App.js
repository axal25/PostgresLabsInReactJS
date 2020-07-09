import React, {Component} from "react";
import AppHeader from "./components/appHeader/appHeader";
import "./App.css";
import NavBar from "./components/navBar/navBar";
import AppFooter from "./components/appFooter/appFooter";
import LaboratoriesData from "./data/laboratories/LaboratoriesData";
import PostgreSQLInstallData from "./data/PostgreSQLInstallData";
import ClassNamesData from "./data/ClassNamesData";
import Contents from "./components/contents/contents";

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
                    {this.renderContents()}
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
                instruction={this.state.postgreSQLInstall}
                classNames={this.state.classNames}
            />
        );
    }

    renderContents() {
        return <Contents
            classNames={this.state.classNames}
            isInstructionCurrentlyChosen={this.state.isInstructionCurrentlyChosen}
            postgreSQLInstall={this.state.postgreSQLInstall}
            isGeneratorCurrentlyChosen={this.state.isGeneratorCurrentlyChosen}
            laboratoryNumbers={this.state.laboratoryNumbers}
            currentLaboratoryIndex={this.state.currentLaboratoryIndex}
            currentLaboratory={this.state.currentLaboratory}
        />;
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
