import Fetcher from "./Fetcher";
import NameGenerator from "./NameGenerator";

class Boxes {
    constructor(props, chocolates, contents) {
        this.props = {
            amountOfBoxes: props.amountOfBoxes,
            chocolates: chocolates,
            contents: contents,
        };
        this.state = {
            path: `/PostgresLabsInReactJS/data/boxes/`,
            files: [
                `adjectives.txt`,
                `nouns.txt`,
            ],
            stock: {
                min: 200,
                max: 700,
            }
        };
    }

    async getBoxes() {
        const allBoxesDataPromise = Fetcher.getAllData(this.state.path, this.state.files);
        const allNeatBoxesDataPromise = this.processData(allBoxesDataPromise);
        return this.generateData(allNeatBoxesDataPromise);
    }

    async processData(allBoxesDataPromise) {
        return allBoxesDataPromise
            .then(
                dataArray => {
                    dataArray = dataArray.map(data => data.split(`\n`));
                    return ({
                        adjectives: dataArray[0],
                        nouns: dataArray[1],
                    });
                }
            );
    }

    async generateData(allNeatBoxesDataPromise) {
        return allNeatBoxesDataPromise.then(
            allNeatChocolateData => Array.from(
                {length: this.props.amountOfBoxes},
                (_, boxIndex) => ({
                    idBox: boxIndex + 1,
                    name: NameGenerator.generateRandomName(allNeatChocolateData.adjectives, allNeatChocolateData.nouns),
                    description: `Description for box ${boxIndex + 1}`,
                    price: this.generateBoxPrice(boxIndex + 1),
                    stock: this.generateRandomStock(),
                })
            )
        )
    }

    generateRandomStock() {
        return Math.floor(Math.random() * (this.state.stock.max - this.state.stock.min) + this.state.stock.min);
    }

    generateBoxPrice(idBox) {
        const contentForIdBox = this.props.contents
            .filter(content => content.idBox === idBox);
        const price = contentForIdBox
            .reduce(
                (costSum, content) => {
                    return costSum + content.quantity * this.props.chocolates[content.idChocolate - 1].cost;
                },
                0
            );
        return (price * 1.1)
            .toFixed(2);
    }

    static toString(boxes) {
        return boxes
            .map(e => `${e.idBox}|${e.name}|${e.description}|${e.price}|${e.stock}`)
            .join(`\n`);
    }
}

export default Boxes;