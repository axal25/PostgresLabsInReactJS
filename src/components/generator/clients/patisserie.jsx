import React, {Component} from "react";
import TextareaAutoresize from "@material-ui/core/TextareaAutosize";
import PatisserieScriptData from "../../../data/PatisserieScriptData.js";
import Spinner from "react-bootstrap/Spinner";
import Clients from "./Clients";
import Orders from "./Orders";
import Chocolates from "./Chocolates";
import Boxes from "./Boxes"
import Contents from "./Contents";
import Articles from "./Articles";

class Patisserie extends Component {
    state = {
        patisserieScriptChunks: PatisserieScriptData.scriptChunks,
        isPatisseriePrepared: false,
        error: undefined,
        clients: undefined,
        orders: undefined,
        chocolates: undefined,
        contents: undefined,
        boxes: undefined,
        articles: undefined,
    };

    componentDidMount() {
        setTimeout(() => {
                this.handlePreparePatisserie().then();
            },
            0
        );
    }

    async handlePreparePatisserie() {
        return this.preparePatisserie()
            .then(this.handleSuccessPreparePatisserie)
            .catch(this.handleErrorPatisserie);
    }

    handleSuccessPreparePatisserie = (response) => {
        this.setState(response);
        this.setState({isPatisseriePrepared: true});
    }

    handleErrorPatisserie = (error) => {
        error.message = `Could not prepare Patisserie data. ${error.message}`;
        this.setState({error});
        console.log(error);
    }

    async preparePatisserie() {
        const clientsObj = new Clients(this.props);
        const clients = await clientsObj.getClients();
        const ordersObj = new Orders(this.props);
        const orders = await ordersObj.getOrders();
        const chocolatesObj = new Chocolates(this.props);
        const chocolates = await chocolatesObj.getChocolates();
        const contentsObj = new Contents(this.props);
        const contents = await contentsObj.getContents();
        const boxesObj = new Boxes(this.props, chocolates, contents);
        const boxes = await boxesObj.getBoxes();
        const articlesObj = new Articles(this.props, orders);
        const articles = await articlesObj.getContents();
        return {clients, orders, chocolates, contents, boxes, articles};
    }

    render() {
        return (
            <React.Fragment>
                {this.renderLoadingSpinner()}
                {this.renderTextArea()}
                {this.renderError()}
            </React.Fragment>
        );
    }

    renderTextArea() {
        return this.state.isPatisseriePrepared
            ? <TextareaAutoresize
                className={this.props.classNames.textAreas.autoResize}
                placeholder={"Empty contents"}
                readOnly={true}
                rowsMin={1}
                rowsMax={100}
                width={3 / 4}
                defaultValue={this.getTextAreaDefaultValue()}
            />
            : null;
    }

    getTextAreaDefaultValue() {
        const patisserieScriptChunks = this.state.patisserieScriptChunks;
        const clients = `${patisserieScriptChunks.clients.beginning}\n${Clients.toString(this.state.clients)}\n${patisserieScriptChunks.any.ending}`;
        const orders = `${patisserieScriptChunks.orders.beginning}\n${Orders.toString(this.state.orders)}\n${patisserieScriptChunks.any.ending}`;
        const chocolates = `${patisserieScriptChunks.chocolates.beginning}\n${Chocolates.toString(this.state.chocolates)}\n${patisserieScriptChunks.any.ending}`;
        const boxes = `${patisserieScriptChunks.boxes.beginning}\n${Boxes.toString(this.state.boxes)}\n${patisserieScriptChunks.any.ending}`;
        const contents = `${patisserieScriptChunks.contents.beginning}\n${Contents.toString(this.state.contents)}\n${patisserieScriptChunks.any.ending}`;
        const articles = `${patisserieScriptChunks.articles.beginning}\n${Articles.toString(this.state.articles)}\n${patisserieScriptChunks.any.ending}`;
        return `${patisserieScriptChunks.beginning}\n${clients}\n${orders}\n${chocolates}\n${boxes}\n${contents}\n${articles}\n${patisserieScriptChunks.ending}`;
    }

    renderLoadingSpinner() {
        return !this.state.isPatisseriePrepared && !this.state.error
            ? <React.Fragment>
                <Spinner animation={"border"}/>
                <div>Loading patisserie.sql script contents...</div>
            </React.Fragment>
            : null;
    }

    renderError() {
        return this.state.error
            ? <span className={this.props.classNames.spans.warning}>
                {`${this.state.error.name}: ${this.state.error.message}`}
            </span>
            : null;
    }
}

export default Patisserie;