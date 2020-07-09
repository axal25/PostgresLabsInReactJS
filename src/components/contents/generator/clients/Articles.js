class Articles {
    constructor(props, orders) {
        this.props = {
            amountOfBoxes: props.amountOfBoxes,
            orders: orders
        };
    }

    async getContents() {
        return this.generateData()
    }

    async generateData() {
        return [].concat(
            ...Array.from(
                {length: this.props.orders.length},
                (_, orderIndex) => {
                    let idBoxesForThisOrder = [];
                    return Array.from(
                        {length: this.generateRandomAmountOfBoxesTypes()},
                        () => ({
                            idOrder: orderIndex + 1,
                            idBox: this.generateRandomIdBox(idBoxesForThisOrder),
                            quantity: this.generateRandomQuantity()
                        })
                    )
                }
            )
        );
    }

    generateRandomIdBox(idBoxesForThisOrder) {
        while (true) {
            const randomIdBox = 1 + Math.floor(Math.random() * this.props.amountOfBoxes);
            if (!idBoxesForThisOrder.find(idBox => idBox === randomIdBox)) {
                idBoxesForThisOrder.push(randomIdBox);
                return randomIdBox;
            }
        }
    }

    generateRandomAmountOfBoxesTypes() {
        return Math.floor(Math.random() * 24 + 1);
    }

    generateRandomQuantity() {
        return Math.floor(Math.random() * 4 + 1)
    }

    static toString(articles) {
        return articles
            .map(article => `${article.idOrder}|${article.idBox}|${article.quantity}`)
            .join(`\n`);
    }
}

export default Articles;