import NamesData from "../../../data/NamesData";
import SurnamesData from "../../../data/SurnamesData";

class Clients {
    constructor(props) {
        this.props = {
            amountOfClients: props.amountOfClients
        };
        this.state = {
            path: `/PostgresLabsInReactJS/data/voivodeships/`,
            files: [
                `dolnoslaskie.csv`,
                `kujawsko-pomorskie.csv`,
                `lodzkie.csv`,
                `lubelskie.csv`,
                `lubuskie.csv`,
                `malopolskie.csv`,
                `mazowieckie_pt1.csv`,
                `mazowieckie_pt2.csv`,
                `opolskie.csv`,
                `podkarpackie.csv`,
                `podlaskie.csv`,
                `pomorskie.csv`,
                `slaskie.csv`,
                `swietokrzyskie.csv`,
                `warminsko-mazurskie.csv`,
                `wielkopolskie.csv`,
                `zachodniopomorskie.csv`,
            ],
            // All cols: LON,LAT,NUMBER,STREET,UNIT,CITY,DISTRICT,REGION,POSTCODE,ID,HASH
            unnecessaryColumnIndexes: [
                0, // Longitude
                1, // Latitude
                4, // UNIT
                6, // DISTRICT
                7, // REGION
                9, // ID
                10 // HASH
            ],
        };
    }

    async getClients() {
        const allNames = NamesData.NAMES;
        const allSurnames = SurnamesData.SURNAMES;
        const allAddresses = await this.getAllVoivodeships();
        const names = Array.from(
            {length: this.props.amountOfClients},
            () => (
                Math.floor(
                    Math.random() * allNames.length
                )
            )
        ).map(index => allNames[index]);
        const surnames = Array.from(
            {length: this.props.amountOfClients},
            () => (
                Math.floor(
                    Math.random() * allSurnames.length
                )
            )
        ).map(index => allSurnames[index]);
        const addresses = Array.from(
            {length: this.props.amountOfClients},
            () => this.getValidatedAddressIndex(allAddresses)
        ).map(index => allAddresses[index]);
        return Array.from(
            {length: this.props.amountOfClients},
            (element, index) => ({
                idClient: index + 1,
                name: `${names[index]} ${surnames[index]}`,
                street: this.getStreetNameAndNumber(addresses[index]),
                city: addresses[index][2],
                zipCode: addresses[index][3],
                phone: this.generateRandomPhoneNumber()
            })
        );
    }

    async getAllVoivodeships() {
        return Promise.all(
            this.state.files
                .map(addressFile =>
                    fetch(`${this.state.path}${addressFile}`)
                        .then(response => response.text())
                )
        ).then(voivodeships =>
            [].concat(...voivodeships
                .map(address => address
                    .split(`\n`)
                    .filter((row, rowIndex) => rowIndex !== 0)
                    .map(row => row
                        .split(`,`)
                        .filter((col, colIndex) =>
                            this.state.unnecessaryColumnIndexes
                                .filter(unnecessaryColIndex => unnecessaryColIndex === colIndex)
                                .length === 0
                        )
                    )
                )
            )
        );
    }

    getValidatedAddressIndex(allAddresses) {
        let index;
        while (true) {
            index = Math.floor(
                Math.random() * allAddresses.length
            )
            /**
             All columns: [LON],[LAT],NUMBER,STREET,[UNIT],CITY,[DISTRICT],[REGION],POSTCODE,[ID],[HASH]
             unnecessaryColumnIndexes: [
             0, // Longitude
             1, // Latitude
             4, // UNIT
             6, // DISTRICT
             7, // REGION
             9, // ID
             10 // HASH
             ],
             AllAddressesColumns: NUMBER, STREET, CITY, POSTCODE
             [...]
             street: this.getStreetNameAndNumber(addresses[index]), // address[1] ? `${address[1]} ${address[0]}` : `${address[0]}`;
             city: addresses[index][2],
             zipCode: addresses[index][3],
             [...]
             **/
            if (
                this.validateStreetNumber(allAddresses[index][0]) // number
                && this.validateStreetName(allAddresses[index][1]) // street
                && this.validateCity(allAddresses[index][2]) // city
                && this.validatePostCode(allAddresses[index][3]) // postCode
            ) return index; // todo: validate post-code further // 9543|Christiana Wanstrath|4a" "4||zachodniopomorskie|428 5 08368
        }
    }

    validateStreetNumber(streetNumber) {
        return !streetNumber
            || streetNumber.search(/([0-9]|[a-z]|[A-Z])*/) !== -1;
    }

    validateStreetName(streetName) {
        return this.validateOnlyLettersAndWhiteSpacesAtLeastOnce(streetName);
    }

    validateCity(city) {
        return this.validateOnlyLettersAndWhiteSpacesAtLeastOnce(city);
    }

    validateOnlyLettersAndWhiteSpacesAtLeastOnce(toValidate) {
        return toValidate
            && toValidate.search(/([a-z]|[A-Z]|\s)+/) !== -1;
    }

    validatePostCode(postCode) {
        return postCode
            && postCode.length === 6
            && postCode.search(/[0-9]{2}-[0-9]{3}/) !== -1;
    }

    getStreetNameAndNumber(address) {
        return address[1] ? `${address[1]} ${address[0]}` : `${address[0]}`;
    }

    generateRandomPhoneNumber() {
        return Array.from(
            {length: 11},
            ((phoneChar, phoneCharIndex) => {
                    if (
                        [3, 7].filter(spaceIndex => spaceIndex === phoneCharIndex)
                            .length === 0
                    ) return Math.floor(
                        Math.random() * 9
                    )
                    else return ` `;
                }
            )
        ).join(``);
    }

    static toString(clients) {
        return clients
            .map(client => `${client.idClient}|${client.name}|${client.street}|${client.city}|${client.zipCode}|${client.phone}`)
            .join(`\n`);
    }
}

export default Clients;