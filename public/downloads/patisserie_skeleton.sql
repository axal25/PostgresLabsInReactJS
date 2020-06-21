DROP TABLE IF EXISTS contents;
DROP TABLE IF EXISTS articles;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS clients;
DROP TABLE IF EXISTS boxes;
DROP TABLE IF EXISTS chocolates;

BEGIN;

CREATE TABLE clients
(
    idClient INTEGER PRIMARY KEY,
    name     VARCHAR(100) NOT NULL,
    street   VARCHAR(150) NOT NULL,
    city     VARCHAR(50)  NOT NULL,
    zipCode  CHAR(6)      NOT NULL,
    phone    VARCHAR(20)  NOT NULL
);

CREATE TABLE orders
(
    idOrder      INTEGER PRIMARY KEY,
    idClient     INTEGER NOT NULL REFERENCES clients,
    deliveryDate DATE    NOT NULL
);

CREATE TABLE chocolates
(
    idChocolate INTEGER PRIMARY KEY,
    name        VARCHAR(75)   NOT NULL,
    chocolate   VARCHAR(30),
    nuts        VARCHAR(30),
    stuffing    VARCHAR(30),
    description VARCHAR(100)  NOT NULL,
    cost        NUMERIC(7, 2) NOT NULL,
    mass        INTEGER       NOT NULL
);

CREATE TABLE boxes
(
    idBox       INTEGER PRIMARY KEY,
    name        VARCHAR(75)   NOT NULL,
    description VARCHAR(150),
    price       NUMERIC(7, 2) NOT NULL,
    stock       INTEGER       NOT NULL
);

CREATE TABLE contents
(
    idBox       INTEGER NOT NULL REFERENCES boxes,
    idChocolate INTEGER NOT NULL REFERENCES chocolates,
    quantity    INTEGER NOT NULL,
    PRIMARY KEY (idBox, idChocolate)
);

CREATE TABLE articles
(
    idOrder  INTEGER NOT NULL REFERENCES orders,
    idBox    INTEGER NOT NULL REFERENCES boxes,
    quantity INTEGER NOT NULL,
    PRIMARY KEY (idOrder, idBox)
);

copy clients from stdin with (null '', delimiter '|');
1|Hłasko Regina|Edwarda Bera 5|Elbląg|91-001|111 222 111
\.


copy orders from stdin with (null '', delimiter '|');
1|2|2013-10-30
\.

copy chocolates from stdin with (null '', delimiter '|');
b01|Płomienna ekstaza|gorzka|łuskane|krem|Orzechy w kremie, zatopione w gorzkiej czekoladzie.|0.30|20
\.

copy contents from stdin with (null '', delimiter '|');
alls|b02|2
\.

copy boxes from stdin with (null '', delimiter '|');
alls|Pory roku|Jagody, truskawki i maliny, wszystkie słodziutkie i smaczne.|14.00|700
\.

copy articles from stdin with (null '', delimiter '|');
1|pean|2
\.

COMMIT;