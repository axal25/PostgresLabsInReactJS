class PatisserieScriptData {
    static scriptChunks = {
        beginning: "DROP TABLE IF EXISTS contents;\n" +
            "DROP TABLE IF EXISTS articles;\n" +
            "DROP TABLE IF EXISTS orders;\n" +
            "DROP TABLE IF EXISTS clients;\n" +
            "DROP TABLE IF EXISTS boxes;\n" +
            "DROP TABLE IF EXISTS chocolates;\n" +
            "\n" +
            "BEGIN;\n" +
            "\n" +
            "CREATE TABLE clients\n" +
            "(\n" +
            "    idClient INTEGER PRIMARY KEY,\n" +
            "    name     VARCHAR(100) NOT NULL,\n" +
            "    street   VARCHAR(150) NOT NULL,\n" +
            "    city     VARCHAR(50)  NOT NULL,\n" +
            "    zipCode  CHAR(6)      NOT NULL,\n" +
            "    phone    VARCHAR(20)  NOT NULL\n" +
            ");\n" +
            "\n" +
            "CREATE TABLE orders\n" +
            "(\n" +
            "    idOrder      INTEGER PRIMARY KEY,\n" +
            "    idClient     INTEGER NOT NULL REFERENCES clients,\n" +
            "    deliveryDate DATE    NOT NULL\n" +
            ");\n" +
            "\n" +
            "CREATE TABLE chocolates\n" +
            "(\n" +
            "    idChocolate INTEGER PRIMARY KEY,\n" +
            "    name        VARCHAR(75)   NOT NULL,\n" +
            "    chocolate   VARCHAR(30),\n" +
            "    nuts        VARCHAR(30),\n" +
            "    stuffing    VARCHAR(30),\n" +
            "    description VARCHAR(100)  NOT NULL,\n" +
            "    cost        NUMERIC(7, 2) NOT NULL,\n" +
            "    mass        INTEGER       NOT NULL\n" +
            ");\n" +
            "\n" +
            "CREATE TABLE boxes\n" +
            "(\n" +
            "    idBox       INTEGER PRIMARY KEY,\n" +
            "    name        VARCHAR(75)   NOT NULL,\n" +
            "    description VARCHAR(150),\n" +
            "    price       NUMERIC(7, 2) NOT NULL,\n" +
            "    stock       INTEGER       NOT NULL\n" +
            ");\n" +
            "\n" +
            "CREATE TABLE contents\n" +
            "(\n" +
            "    idBox       INTEGER NOT NULL REFERENCES boxes,\n" +
            "    idChocolate INTEGER NOT NULL REFERENCES chocolates,\n" +
            "    quantity    INTEGER NOT NULL,\n" +
            "    PRIMARY KEY (idBox, idChocolate)\n" +
            ");\n" +
            "\n" +
            "CREATE TABLE articles\n" +
            "(\n" +
            "    idOrder  INTEGER NOT NULL REFERENCES orders,\n" +
            "    idBox    INTEGER NOT NULL REFERENCES boxes,\n" +
            "    quantity INTEGER NOT NULL,\n" +
            "    PRIMARY KEY (idOrder, idBox)\n" +
            ");",
        clients: {
            beginning: "copy clients from stdin with (null '', delimiter '|');"
        },
        orders: {
            beginning: "copy orders from stdin with (null '', delimiter '|');"
        },
        chocolates: {
            beginning: "copy chocolates from stdin with (null '', delimiter '|');"
        },
        contents: {
            beginning: "copy contents from stdin with (null '', delimiter '|');"
        },
        boxes: {
            beginning: "copy boxes from stdin with (null '', delimiter '|');"
        },
        articles: {
            beginning: "copy articles from stdin with (null '', delimiter '|');"
        },
        any: {ending: "\\."},
        ending: "COMMIT;",
    };
}

export default PatisserieScriptData;