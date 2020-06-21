class Orders {
    constructor(props) {
        this.props = {
            amountOfClients: props.amountOfClients
        };
    }

    async getOrders() {
        return [].concat(
            ...Array.from(
                {length: this.props.amountOfClients},
                (element, index) => (index + 1)
            ).map((idClient) => (
                Array.from(
                    {
                        length: Math.floor(
                            1 + Math.random() * 5
                        )
                    },
                    () => ({idClient: idClient, date: this.generateRandomDate()})
                )
            ))
        ).map(
            ({idClient, date}, orderIndex) => ({
                idOrder: orderIndex + 1,
                idClient,
                date,
            })
        );
    }

    generateRandomDate() {
        // 2013-10-30
        const year = 2012 + Math.floor(Math.random() * 2);
        const month = 1 + Math.floor(Math.random() * 12);
        const numberOfDaysInMonth = this.getNumberOfDaysInMonth(year, month);
        const day = 1 + Math.floor(Math.random() * numberOfDaysInMonth);
        const formattedDay = day < 10 ? `0${day}` : day;
        const formattedMonth = month < 10 ? `0${month}` : month;
        return `${year}-${formattedMonth}-${formattedDay}`;
    }

    getNumberOfDaysInMonth(year, month) {
        return month === 7 || month === 8
            ? 31
            : (month < 7 ?
                    (month % 2 !== 0
                            ? 31
                            : (month === 2
                                    ? this.getFebruaryDays(year)
                                    : 30
                            )
                    )
                    : (month % 2 === 0
                            ? 31
                            : 30
                    )
            );
    }

    getFebruaryDays(year) {
        return year % 4 === 0 ? 29 : 28;
    }

    static toString(orders) {
        return orders
            .map(order => `${order.idOrder}|${order.idClient}|${order.date}`)
            .join(`\n`);
    }
}

export default Orders;