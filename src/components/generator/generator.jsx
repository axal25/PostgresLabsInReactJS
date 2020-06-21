import React, {Component} from "react";
import loadable from "@loadable/component";
import Spinner from "react-bootstrap/Spinner";

const Clients = loadable(
    () => import(
        /* webpackPrefetch: true */
        "./clients/patisserie"
        ), {
        fallback: (
            <React.Fragment>
                <Spinner animation={"border"}/>
                <div>Loading patisserie.sql script contents...</div>
            </React.Fragment>
        )
    }
);

class Generator extends Component {
    state = {
        inputs: {
            amountOfClients: {
                id: "amountOfClients",
                label: "Amount of Clients to generate",
                value: 1000
            },
            amountOfChocolates: {
                id: "amountOfChocolates",
                label: "Amount of Chocolates to generate",
                value: 50
            },
            amountOfBoxes: {
                id: "amountOfBoxes",
                label: "Amount of Boxes to generate",
                value: 25
            },
        },
        sources: [
            {
                link: "https://github.com/smashew/NameDatabases/",
                description: "Names and surnames source - NameDatabases by smashew"
            },
            {
                link: "http://results.openaddresses.io/",
                description: "Addresses source - selected by hand files from OpenAddress.io"
            },
        ],
        renderLazilyClients: false,
        pathToPatisserieScript: `/PostgresLabsInReactJS/downloads/patisserie.sql`,
    };

    constructor(props) {
        super(props);
        this.handleGeneratePatisserieBtnClick = this.handleGeneratePatisserieBtnClick.bind(this);
        this.handleInputClientsChange = this.handleInputClientsChange.bind(this);
        this.handleInputChocolatesChange = this.handleInputChocolatesChange.bind(this);
        this.handleInputBoxesChange = this.handleInputBoxesChange.bind(this);
    }

    componentDidMount() {
        Clients.preload();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.renderLazilyClients && !this.state.renderLazilyClients) this.setState({renderLazilyClients: true});
    }

    render() {
        return (
            <div className={this.props.classNames.divs.generator}>
                {this.renderTitle()}
                {this.renderDescription()}
                {this.renderDataWarning()}
                {this.renderForm()}
                {this.renderLazilyClients()}
                {this.renderSources()}
            </div>
        );
    }

    renderTitle() {
        return <h3><span className={this.props.classNames.spans.title}>Generator</span></h3>;
    }

    renderDescription() {
        return (
            <div className={this.props.classNames.divs.section}>
                <div className={this.props.classNames.divs.instruction}>
                    <span className={this.props.classNames.spans.instruction}>
                        This is a PostgreSQL script generator used to create "patisserie" database used in laboratories.
                    </span>
                </div>
                <div className={this.props.classNames.divs.instruction}>
                    <span className={this.props.classNames.spans.instruction}>
                        It generates random table entries.
                    </span>
                </div>
                <div className={this.props.classNames.divs.instruction}>
                    <span className={this.props.classNames.spans.instruction}>
                        If you wish to have exactly the same results as presented on this page download static version of "patisseries.sql" script.
                    </span>
                </div>
                <div className={this.props.classNames.divs.instruction}>
                    <span className={this.props.classNames.badges.parents.smallText}>
                        <a
                            href={this.state.pathToPatisserieScript}
                            className={this.props.classNames.spans.primaryPill}
                            download>
                            Static version of "patisseries.sql" script
                        </a>
                    </span>
                </div>
            </div>
        );
    }

    renderDataWarning() {
        return <div className={this.props.classNames.divs.warning}>
            <h1>WARNING</h1>
            Every step of generating this data is done on the front-end layer. <br/>
            Generating clients requires a lot of data files (1GB+) to be fetched from the server. <br/>
            It also takes a lot of time for the data to be fetched even on cable connection. <br/>
            And then at last is the data processing. It also takes a lot of time. <br/>
            The page will become unresponsive during the time of the script generation. <br/>
        </div>
    }

    renderForm() {
        const inputClients = this.state.inputs.amountOfClients;
        const inputChocolates = this.state.inputs.amountOfChocolates;
        const inputBoxes = this.state.inputs.amountOfBoxes;
        const classNames = this.props.classNames;
        return (
            <form
                className={classNames.forms.inline}
                onSubmit={(event) => this.handleGeneratePatisserieBtnClick(event)}
            >
                <div className={classNames.divs.form}>
                    <span>
                        <span className={classNames.spans.secondary}>
                            <label
                                htmlFor={inputClients.id}
                            >
                                {inputClients.label}
                            </label>
                        </span>
                        <input
                            type={"text"}
                            className={classNames.textAreas.input}
                            id={inputClients.id}
                            placeholder={inputClients.label}
                            defaultValue={inputClients.value}
                            onChange={this.handleInputClientsChange}
                        />
                    </span>
                    <span>
                        <span className={classNames.spans.secondary}>
                            <label
                                htmlFor={inputChocolates.id}
                            >
                                {inputChocolates.label}
                            </label>
                        </span>
                        <input
                            type={"text"}
                            className={classNames.textAreas.input}
                            id={inputChocolates.id}
                            placeholder={inputChocolates.label}
                            defaultValue={inputChocolates.value}
                            onChange={this.handleInputChocolatesChange}
                        />
                    </span>
                    <span>
                        <span className={classNames.spans.secondary}>
                            <label
                                htmlFor={inputBoxes.id}
                            >
                                {inputBoxes.label}
                            </label>
                        </span>
                        <input
                            type={"text"}
                            className={classNames.textAreas.input}
                            id={inputBoxes.id}
                            placeholder={inputBoxes.label}
                            defaultValue={inputBoxes.value}
                            onChange={this.handleInputBoxesChange}
                        />
                    </span>
                    <span>
                        <button
                            className={classNames.buttons.secondary}
                            type={"submit"}
                        >
                            Generate Patisserie
                        </button>
                    </span>
                </div>
            </form>
        );
    }

    renderLazilyClients() {
        return this.state.renderLazilyClients
            ? <Clients
                classNames={this.props.classNames}
                amountOfClients={this.state.inputs.amountOfClients.value}
                amountOfChocolates={this.state.inputs.amountOfChocolates.value}
                amountOfBoxes={this.state.inputs.amountOfBoxes.value}
            />
            : null;
    }

    renderSources() {
        return (
            <React.Fragment>
                <span className={this.props.classNames.spans.secondary}>Sources</span>
                <div className={this.props.classNames.divs.section}>
                    {this.state.sources.map((source, index) => this.getLinkIfLink(index, source.link, source.description))}
                </div>
            </React.Fragment>
        );
    }

    getLinkIfLink(key, link, description) {
        return link
            ? <span key={key} className={this.props.classNames.badges.parents.smallText}>
                <a href={link} className={this.props.classNames.spans.primaryPill}>
                    {description}
                </a>
            </span>
            : null;
    }

    handleInputClientsChange(event) {
        const input = {...this.state.inputs.amountOfClients, value: event.target.value};
        const inputs = {...this.state.inputs, amountOfClients: input};
        this.setState({inputs: inputs});
    }

    handleInputChocolatesChange(event) {
        const input = {...this.state.inputs.amountOfChocolates, value: event.target.value};
        const inputs = {...this.state.inputs, amountOfChocolates: input};
        this.setState({inputs: inputs});
    }

    handleInputBoxesChange(event) {
        const input = {...this.state.inputs.amountOfBoxes, value: event.target.value};
        const inputs = {...this.state.inputs, amountOfBoxes: input};
        this.setState({inputs: inputs});
    }

    handleGeneratePatisserieBtnClick(event) {
        event.preventDefault();
        if (this.state.renderLazilyClients) this.setState({renderLazilyClients: false});
        else this.setState({renderLazilyClients: true});
    }
}

export default Generator;