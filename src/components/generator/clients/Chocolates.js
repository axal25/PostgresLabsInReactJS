import Fetcher from "./Fetcher";
import NameGenerator from "./NameGenerator";

class Chocolates {
    constructor(props) {
        this.props = {
            amountOfChocolates: props.amountOfChocolates
        };
        this.state = {
            path: `/PostgresLabsInReactJS/data/chocolates/`,
            files: [
                `adjectives.txt`,
                `nouns.txt`,
                `chocolates.txt`,
                `nuts.txt`,
                `stuffings.txt`
            ],
            cost: {
                min: 20,
                max: 40,
                scale: 100,
            },
            mass: {
                min: 10,
                max: 35,
            },
        };
    }

    async getChocolates() {
        const allChocolateDataPromise = Fetcher.getAllData(this.state.path, this.state.files)
        const allNeatChocolateDataPromise = this.processData(allChocolateDataPromise)
        return this.generateData(allNeatChocolateDataPromise);
    }

    async processData(allChocolateDataPromise) {
        return allChocolateDataPromise
            .then(
                dataArray => {
                    dataArray = dataArray.map(data => data.split(`\n`));
                    return ({
                        adjectives: dataArray[0],
                        nouns: dataArray[1],
                        chocolates: dataArray[2],
                        nuts: dataArray[3],
                        stuffings: dataArray[4]
                    });
                }
            );
    }

    async generateData(allNeatChocolateDataPromise) {
        return allNeatChocolateDataPromise.then(
            allNeatChocolateData => Array.from(
                {length: this.props.amountOfChocolates},
                (e, index) => ({
                    idChocolate: index + 1,
                    name: NameGenerator.generateRandomName(allNeatChocolateData.adjectives, allNeatChocolateData.nouns),
                    chocolate: allNeatChocolateData.chocolates[Math.floor(Math.random() * allNeatChocolateData.chocolates.length)],
                    nuts: this.generateRandomNutsOrStuffing(allNeatChocolateData.nuts),
                    stuffing: this.generateRandomNutsOrStuffing(allNeatChocolateData.stuffings),
                    description: `Description for chocolate ${index + 1}`,
                    cost: this.generateRandomCost(),
                    mass: this.generateRandomMass(),
                })
            )
        );
    }

    generateRandomNutsOrStuffing(allNutsOrStuffings) {
        const stuffingOrNuts = allNutsOrStuffings[Math.floor(Math.random() * (allNutsOrStuffings.length + 1))];
        return stuffingOrNuts ? stuffingOrNuts : ``;
    }

    generateRandomCost() {
        return Math.floor(Math.random() * (this.state.cost.max - this.state.cost.min) + this.state.cost.min) / this.state.cost.scale;
    }

    generateRandomMass() {
        return Math.floor(Math.random() * (this.state.mass.max - this.state.mass.min) + this.state.mass.min);
    }

    static toString(chocolates) {
        return chocolates
            .map(e => `${e.idChocolate}|${e.name}|${e.chocolate}|${e.nuts}|${e.stuffing}|${e.description}|${e.cost}|${e.mass}`)
            .join(`\n`);
    }
}

export default Chocolates;