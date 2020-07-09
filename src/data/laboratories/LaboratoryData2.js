class LaboratoryData2 {
    static getLaboratoryData2() {
        return {
            number: "2",
            subTitle: "Basics",
            exercises: [
                {
                    number: "2.1.1",
                    title: "Setting up the database",
                    panels: [
                        {
                            name: "sections",
                            sections: [
                                {
                                    title: "Verification of psql installation on local machine",
                                    instructions: [
                                        {
                                            text: "Check if you have installed psql:",
                                            command: "psql --version",
                                            output: "psql (PostgreSQL) 12.3 (Ubuntu 12.3-1.pgdg18.04+1)",
                                        },
                                    ]
                                },
                                {
                                    title: "Connecting to local machine's postgres database",
                                    subTitle: "optional",
                                    instructions: [
                                        {
                                            text: "Connect to your local machine's postgres database:",
                                            command: "sudo -u postgres psql",
                                            output: "psql (12.3 (Ubuntu 12.3-1.pgdg18.04+1))\n" +
                                                "Type \"help\" for help.\n" +
                                                "\n" +
                                                "postgres=# ",
                                        },
                                        {
                                            text: "Check your connection info:",
                                            command: "postgres=# \\conninfo",
                                            output: "You are connected to database \"postgres\" as user \"postgres\" via socket in \"/var/run/postgresql\" at port \"5432\".\n" +
                                                "postgres=# ",
                                        },
                                    ]
                                },
                                {
                                    title: "Adding password to psql user",
                                    instructions: [
                                        {
                                            text: [
                                                "Just remember that to connect to postgres database any other way than by using authorized command line your user needs a password.",
                                                "You can easily add new password to postgres user:"
                                            ],
                                            command: "psql -c \"alter user postgres with password 'StrongAdminP@ssw0rd'\""
                                        },
                                        {
                                            text: [
                                                "You can add this password the same way inside of docker container but you have to connect to docker container's bash first.",
                                                "It is shown later on how to do that."
                                            ]
                                        }
                                    ]
                                },
                                {
                                    title: "Connecting to database and running script",
                                    subTitle: "inside docker container",
                                    instructions: [
                                        {
                                            text: [
                                                "Detailed instruction of setting up PostgreSQL inside Docker container can be found in the \"Install PostgreSQL\" section.",
                                                "Here we will be presenting only necessary information to start already prepared Docker PostgreSQL container.",
                                                "Check the list of active docker containers:",
                                            ],
                                            command: "$ docker ps",
                                            output: "CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES"
                                        },
                                        {
                                            text: "Check the list of all the prepared docker containers:",
                                            command: "$ docker container ls -a",
                                            output: "CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS                      PORTS                    NAMES\n" +
                                                "67c5b71b4a24        postgres:alpine     \"docker-entrypoint.s…\"   2 weeks ago         Exited (255) 13 hours ago   0.0.0.0:5432->5432/tcp   PostgreSQLaboratories\n" +
                                                "603a9f50fce0        5b681acb1cfc        \"docker-entrypoint.s…\"   6 months ago        Exited (255) 6 months ago   0.0.0.0:5432->5432/tcp   postgresPASSWORD2\n" +
                                                "f0ef0e1f1bee        5b681acb1cfc        \"docker-entrypoint.s…\"   7 months ago        Exited (255) 6 months ago   0.0.0.0:5432->5432/tcp   postgresPASSWORD\n",
                                        },
                                        {
                                            text: "Start configured Docker PostgreSQL container:",
                                            command: "$ docker start PostgreSQLaboratories",
                                            output: "PostgreSQLaboratories"
                                        },
                                        {
                                            text: "Check the list of active docker containers for the second time:",
                                            command: "$ docker ps",
                                            output: "CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                    NAMES\n" +
                                                "67c5b71b4a24        postgres:alpine     \"docker-entrypoint.s…\"   2 weeks ago         Up 6 seconds        0.0.0.0:5432->5432/tcp   PostgreSQLaboratories\n",
                                        },
                                        {
                                            text: "Download script creating tables for the database:",
                                            link: "/PostgresLabsInReactJS/downloads/patisserie.sql",
                                        },
                                        {
                                            text: "Change directory to where you have downloaded patisserie.sql file and run",
                                            command: "$ psql -h localhost -p 5432 -U postgres",
                                            output: "Password for user postgres:\n" +
                                                "psql (10.12 (Ubuntu 10.12-0ubuntu0.18.04.1), server 12.3)\n" +
                                                "WARNING: psql major version 10, server major version 12.\n" +
                                                "         Some psql features might not work.\n" +
                                                "Type \"help\" for help.\n" +
                                                "postgres=#",
                                        },
                                        {
                                            text: "Check the list of available databases:",
                                            command: "postgres=#  \\l",
                                            output: "                                       List of databases\n" +
                                                "         Name          |  Owner   | Encoding |  Collate   |   Ctype    |   Access privileges   \n" +
                                                "-----------------------+----------+----------+------------+------------+-----------------------\n" +
                                                " postgres              | postgres | UTF8     | en_US.utf8 | en_US.utf8 | \n" +
                                                " postgresqlaboratories | postgres | UTF8     | en_US.utf8 | en_US.utf8 | \n" +
                                                " template0             | postgres | UTF8     | en_US.utf8 | en_US.utf8 | =c/postgres          +\n" +
                                                "                       |          |          |            |            | postgres=CTc/postgres\n" +
                                                " template1             | postgres | UTF8     | en_US.utf8 | en_US.utf8 | =c/postgres          +\n" +
                                                "                       |          |          |            |            | postgres=CTc/postgres\n" +
                                                "(4 rows)\n",
                                        },
                                        {
                                            text: "Optionally (if there already does not exist) create database \"postgresqlaboratories\" using command:",
                                            command: "CREATE DATABASE postgresqlaboratories",
                                        },
                                        {
                                            text: "Connect/switch to the \"postgresqlaboratories\" database:",
                                            command: "postgres=# \\c postgresqlaboratories",
                                            output: "psql (10.12 (Ubuntu 10.12-0ubuntu0.18.04.1), server 12.3)\n" +
                                                "WARNING: psql major version 10, server major version 12.\n" +
                                                "         Some psql features might not work.\n" +
                                                "You are now connected to database \"postgresqlaboratories\" as user \"postgres\".\n" +
                                                "postgresqlaboratories=#",
                                        },
                                        {
                                            text: "List tables in current database:",
                                            command: ["postgresqlaboratories=# \\d", "postgresqlaboratories=# \\dt"],
                                            output: "Did not find any relations.",
                                        },
                                        {
                                            text: "Run downloaded script (you must be connected to database from the directory containing \"patisserie.sql\"):",
                                            command: "postgresqlaboratories=# \\i patisserie.sql",
                                            output: "psql:patisserie.sql:1: NOTICE:  table \"contents\" does not exist, skipping\n" +
                                                "DROP TABLE\n" +
                                                "psql:patisserie.sql:2: NOTICE:  table \"articles\" does not exist, skipping\n" +
                                                "DROP TABLE\n" +
                                                "psql:patisserie.sql:3: NOTICE:  table \"orders\" does not exist, skipping\n" +
                                                "DROP TABLE\n" +
                                                "psql:patisserie.sql:4: NOTICE:  table \"clients\" does not exist, skipping\n" +
                                                "DROP TABLE\n" +
                                                "psql:patisserie.sql:5: NOTICE:  table \"boxes\" does not exist, skipping\n" +
                                                "DROP TABLE\n" +
                                                "psql:patisserie.sql:6: NOTICE:  table \"chocolates\" does not exist, skipping\n" +
                                                "DROP TABLE\n" +
                                                "BEGIN\n" +
                                                "CREATE TABLE\n" +
                                                "CREATE TABLE\n" +
                                                "CREATE TABLE\n" +
                                                "CREATE TABLE\n" +
                                                "CREATE TABLE\n" +
                                                "CREATE TABLE\n" +
                                                "COPY 10000\n" +
                                                "COPY 29853\n" +
                                                "COPY 500\n" +
                                                "COPY 250\n" +
                                                "COPY 796\n" +
                                                "COPY 373398\n" +
                                                "COMMIT\n",
                                        },
                                        {
                                            text: "List the tables in the database for the second time:",
                                            command: ["postgresqlaboratories=# \\d", "postgresqlaboratories=# \\dt"],
                                            output: "           List of relations\n" +
                                                " Schema |    Name    | Type  |  Owner   \n" +
                                                "--------+------------+-------+----------\n" +
                                                " public | articles   | table | postgres\n" +
                                                " public | boxes      | table | postgres\n" +
                                                " public | chocolates | table | postgres\n" +
                                                " public | clients    | table | postgres\n" +
                                                " public | contents   | table | postgres\n" +
                                                " public | orders     | table | postgres\n" +
                                                "(6 rows)",
                                        },
                                    ]
                                },
                            ]
                        }
                    ],

                },
                {
                    title: "Database orientation",
                    panels: [
                        {
                            name: "sections",
                            sections: [
                                {
                                    title: "Basic commands",
                                    instructions: [
                                        {
                                            text: "List available databases:",
                                            command: "# \\l",
                                        },
                                        {
                                            text: "List tables in database:",
                                            command: ["# \\dt", "# \\d"],
                                        },
                                        {
                                            text: "List table structure:",
                                            command: "# \\d <table_name>",
                                        },
                                        {
                                            text: "Run script:",
                                            command: "# \\i <script_file>",
                                        },
                                    ]
                                }
                            ],
                        },
                        {
                            name: "question",
                            text: "Using \\d command check structure of each table created by script",
                        },
                        {
                            name: "result",
                            text: "result 2.2",
                        },
                        {
                            name: "solution",
                            text: "solution 2.2",
                        },
                    ],
                }
            ]
        };
    }
}

export default LaboratoryData2;