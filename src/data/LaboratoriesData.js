class LaboratoriesData {
    static getLaboratories() {
        return [
            undefined,
            {},
            {
                subTitle: "Basics",
                exercises: [
                    {
                        number: "2.0.0",
                        title: "Short Description for exercise......",
                        subTitle: "Setting up the database",
                        question: "$ docker ps\n" +
                            "CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES\n" +
                            "$ docker container ls -a\n" +
                            "CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS                      PORTS                    NAMES\n" +
                            "67c5b71b4a24        postgres:alpine     \"docker-entrypoint.s…\"   2 weeks ago         Exited (255) 13 hours ago   0.0.0.0:5432->5432/tcp   PostgreSQLaboratories\n" +
                            "603a9f50fce0        5b681acb1cfc        \"docker-entrypoint.s…\"   6 months ago        Exited (255) 6 months ago   0.0.0.0:5432->5432/tcp   postgresPASSWORD2\n" +
                            "f0ef0e1f1bee        5b681acb1cfc        \"docker-entrypoint.s…\"   7 months ago        Exited (255) 6 months ago   0.0.0.0:5432->5432/tcp   postgresPASSWORD\n" +
                            "$ docker start PostgreSQLaboratories\n" +
                            "PostgreSQLaboratories\n" +
                            "$ docker ps\n" +
                            "CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                    NAMES\n" +
                            "67c5b71b4a24        postgres:alpine     \"docker-entrypoint.s…\"   2 weeks ago         Up 6 seconds        0.0.0.0:5432->5432/tcp   PostgreSQLaboratories\n" +
                            "$ psql -h localhost -p 5432 -U postgres\n" +
                            "Password for user postgres: \n" +
                            "psql (10.12 (Ubuntu 10.12-0ubuntu0.18.04.1), server 12.3)\n" +
                            "WARNING: psql major version 10, server major version 12.\n" +
                            "         Some psql features might not work.\n" +
                            "Type \"help\" for help.\n" +
                            "\n" +
                            "postgres=#  \\l\n" +
                            "                                       List of databases\n" +
                            "         Name          |  Owner   | Encoding |  Collate   |   Ctype    |   Access privileges   \n" +
                            "-----------------------+----------+----------+------------+------------+-----------------------\n" +
                            " postgres              | postgres | UTF8     | en_US.utf8 | en_US.utf8 | \n" +
                            " postgresqlaboratories | postgres | UTF8     | en_US.utf8 | en_US.utf8 | \n" +
                            " template0             | postgres | UTF8     | en_US.utf8 | en_US.utf8 | =c/postgres          +\n" +
                            "                       |          |          |            |            | postgres=CTc/postgres\n" +
                            " template1             | postgres | UTF8     | en_US.utf8 | en_US.utf8 | =c/postgres          +\n" +
                            "                       |          |          |            |            | postgres=CTc/postgres\n" +
                            "(4 rows)\n" +
                            "\n" +
                            "postgres=# \\c postgresqlaboratories\n" +
                            "psql (10.12 (Ubuntu 10.12-0ubuntu0.18.04.1), server 12.3)\n" +
                            "WARNING: psql major version 10, server major version 12.\n" +
                            "         Some psql features might not work.\n" +
                            "You are now connected to database \"postgresqlaboratories\" as user \"postgres\".\n" +
                            "postgresqlaboratories=# \\i patisserie.sql"
                    },
                    {
                        number: "2.1.1",
                        title: "Short Description for exercise......",
                        subTitle: "next.........",
                        question: "question 2.1.1",
                        result: "result 2.1.1",
                        solution: "solution 2.1.1"
                    }
                ]
            },
            {
                exercises: [
                    {
                        number: 31.1,
                        question: "question 3.1.1",
                        result: "result 3.1.1",
                        solution: "solution 3.1.1"
                    },
                    {
                        number: 31.2,
                        question: "question 3.1.2",
                        result: "result 3.1.2",
                        solution: "solution 3.1.2"
                    }
                ]
            },
            {
                exercises: [
                    {
                        number: 41.1,
                        question: "question 4.1.1",
                        result: "result 4.1.1",
                        solution: "solution 4.1.1"
                    },
                    {
                        number: 41.2,
                        question: "question 4.1.2",
                        result: "result 4.1.2",
                        solution: "solution 4.1.2"
                    },
                    {
                        number: 41.3,
                        question: "question 4.1.3",
                        result: "result 4.1.3",
                        solution: "solution 4.1.3"
                    }
                ]
            },
            {
                exercises: [
                    {
                        number: 51.1,
                        question: "question 5.1.1",
                        result: "result 5.1.1",
                        solution: "solution 5.1.1"
                    },
                    {
                        number: 51.2,
                        question: "question 5.1.2",
                        result: "result 5.1.2",
                        solution: "solution 5.1.2"
                    },
                    {
                        number: 51.3,
                        question: "question 5.1.3",
                        result: "result 5.1.3",
                        solution: "solution 5.1.3"
                    },
                    {
                        number: 51.4,
                        question: "question 5.1.4",
                        result: "result 5.1.4",
                        solution: "solution 5.1.4"
                    }
                ]
            },
            {
                exercises: [
                    {
                        number: 61.1,
                        question: "question 6.1.1",
                        result: "result 6.1.1",
                        solution: "solution 6.1.1"
                    },
                    {
                        number: 61.2,
                        question: "question 6.1.2",
                        result: "result 6.1.2",
                        solution: "solution 6.1.2"
                    },
                    {
                        number: 61.3,
                        question: "question 6.1.3",
                        result: "result 6.1.3",
                        solution: "solution 6.1.3"
                    },
                    {
                        number: 61.4,
                        question: "question 6.1.4",
                        result: "result 6.1.4",
                        solution: "solution 6.1.4"
                    },
                    {
                        number: 61.5,
                        question: "question 6.1.5\n2nd line \n3rd line",
                        result: "result 6.1.5\nfirst line .................... \nsecond line ........................................\nthird line .....................................................\nfourth line ..................................................................................\nfifth line ...................................",
                        solution: "solution 6.1.5"
                    }
                ]
            },
            {
                subTitle: "Short description for laboratory 7...........................",
                exercises: []
            },
            {
                subTitle: "Short description for laboratory 8..........................."
            }
        ]
    }
}

export default LaboratoriesData;