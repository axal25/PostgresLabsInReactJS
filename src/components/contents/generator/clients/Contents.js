class Contents {
    constructor(props) {
        this.props = {
            amountOfChocolates: props.amountOfChocolates,
            amountOfBoxes: props.amountOfBoxes
        };
    }

    async getContents() {
        return this.generateData()
    }

    async generateData() {
        const contentsChocolateCanBeInNoBoxes = [].concat(
            ...Array.from(
                {length: this.props.amountOfBoxes},
                (_, boxIndex) => {
                    let idChocolatesForThisBox = [];
                    return Array.from(
                        {length: this.generateRandomAmountOfChocolateTypes()},
                        () => ({
                            idBox: boxIndex + 1,
                            idChocolate: this.generateRandomIdChocolate(idChocolatesForThisBox),
                            quantity: this.generateRandomQuantity()
                        })
                    )
                }
            )
        );
        const allIdChocolates = Array.from(
            {length: this.props.amountOfChocolates},
            (_, index) => index + 1
        );
        const contentsUnusedChocolates = allIdChocolates.filter(
            idChocolate => contentsChocolateCanBeInNoBoxes.find(
                content => content.idChocolate === idChocolate
            ) === undefined
        ).map(idChocolate => ({
            idBox: this.generateRandomIdBox(),
            idChocolate,
            quantity: this.generateRandomQuantity()
        }))
        return [].concat(contentsChocolateCanBeInNoBoxes, contentsUnusedChocolates);
    }

    generateRandomIdChocolate(idChocolatesForThisBox) {
        while (true) {
            const randomChocolateId = 1 + Math.floor(Math.random() * this.props.amountOfChocolates);
            if (!idChocolatesForThisBox.find(idChocolate => idChocolate === randomChocolateId)) {
                idChocolatesForThisBox.push(randomChocolateId);
                return randomChocolateId;
            }
        }
    }

    generateRandomIdBox() {
        return 1 + Math.floor(Math.random() * this.props.amountOfBoxes);
    }

    generateRandomAmountOfChocolateTypes() {
        return this.generateRandomWeightedValue();
    }

    generateRandomQuantity() {
        return this.generateRandomWeightedValue();
    }

    generateRandomWeightedValue() {
        const quantityRoll = Math.floor(Math.random() * 10);
        return quantityRoll < 4
            ? 2
            : quantityRoll < 7
                ? 3
                : quantityRoll < 8
                    ? 1
                    : quantityRoll < 9
                        ? 4
                        : 5;
    }

    static toString(contents) {
        return contents
            .map(content => `${content.idBox}|${content.idChocolate}|${content.quantity}`)
            .join(`\n`);
    }
}

export default Contents;