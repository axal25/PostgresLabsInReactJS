class PostgreSQLInstallData {
    constructor() {
        this.postgreSQLInstallData = {
            title: "Install PostgreSQL",
            subTitle: "using Docker container",
            sections: [
                {
                    title: "Why use Docker container",
                    subTitle: "to run PostgreSQL?",
                    instructions: [
                        [{text: "Because it's faster and easier than installing and configuring PostgreSQL standalone on your particular machine."}],
                        [{text: "It also allows for running multiple PostgreSQL instances/distributions/versions on different ports."}],
                        [{text: "In addition it lets you quickly create or turn on and off new isolated instances of PostgreSQL for different uses."}]
                    ]
                },
                {
                    title: "Install docker",
                    instructions: [
                        [{
                            text: "Go to",
                            link: "https://docs.docker.com/get-docker/"
                        }],
                        [{text: "Choose distribution for your Operating System"}],
                        [{text: "[Windows] Click \"Download from Docker Hub\" then download and install"}],
                        [{
                            text: "[Ubuntu] Use command to uninstall older versions:",
                            command: ["$ sudo apt-get remove docker docker-engine docker.io containerd runc"]
                        }],
                        [{
                            text: "Then to download convenience script run:",
                            command: "$ curl -fsSL https://get.docker.com -o get-docker.sh"
                        }],
                        [{
                            text: "Then to run the script run:",
                            command: "sudo sh get-docker.sh"
                        }],
                        [{
                            text: "To remove previously installed (newer) distribution of docker run:",
                            command: "$ sudo apt-get purge docker-ce docker-ce-cli containerd.io"
                        }],
                        [{
                            text: "To remove images, containers, volumes, config files run:",
                            command: "$ sudo rm -rf /var/lib/docker"
                        }],
                        [{
                            text: "Test your installation by running:",
                            command: "$ docker --help"
                        }],
                        [{text: "You may need to restart your terminal or relog to your account for the command to work."}]
                    ]
                },
                {
                    title: "Install PostgreSQL",
                    instructions: [
                        [
                            {
                                text: "Go to",
                                link: "https://hub.docker.com/signup"
                            },
                            {text: "and register or if you already have an account and login."}
                        ],
                        [
                            {
                                text: "Then at",
                                link: "https://hub.docker.com/"
                            },
                            {text: "via searchbar at the top of the page search for \"postgres\"."}
                        ],
                        [{text: "Choose \"postgres\" with elephant icon and make sure it is designated as \"Docker Official Images\" on next page."}],
                        [{text: "At the right-hand side of the page there will be dropdown menu for you to choose your Operating System."}],
                        [{text: "Underneath it there's TextArea with a description above it stating \"Copy and paste to pull this image\"."}],
                        [{text: "Copy, Paste and Execute the command from mentioned TextArea:"}],
                        [
                            {
                                text: "",
                                command: "$ docker pull postgres"
                            },
                            {
                                text: "or",
                                command: "$ docker pull postgres:alpine"
                            },
                            {text: "if you want to specify distribution and/or version."}
                        ],
                        [{text: "You are now a proud owner of the PostgreSQL container image."}],
                        [{text: "It is still not running but you have everything you need to run it on your computer."}],
                        [{
                            text: "You can check list of docker images using command:",
                            command: "$ docker images"
                        }]
                    ]
                },
                {
                    title: "Run PostgreSQL",
                    instructions: [
                        [
                            {
                                text: "Firstly run:",
                                command: "$ docker images"
                            }
                        ],
                        [
                            {
                                text: "In my case it results in such an output:",
                            }
                        ],
                        [
                            {
                                output: "REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE\n" +
                                    "postgres            12-alpine           bd3eeea38a5a        2 weeks ago         151MB\n" +
                                    "postgres            alpine              bd3eeea38a5a        2 weeks ago         151MB\n" +
                                    "postgres            latest              adf2b126dda8        2 weeks ago         313MB\n" +
                                    "postgres            <none>              5b681acb1cfc        7 months ago        72.8MB\n"
                            }
                        ],
                        [{text: "Because I have few different images of varying PostgreSQL versions and distributions."}],
                        [{
                            text: "To create new instance of PostgreSQL container ready to run and start it at the same time type in:",
                            command: "$ docker run --name PostgreSQLaboratories -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres:alpine"
                        }],
                        [{
                            output: "67c5b71b4a241987935e4237d50f29c5fc4b160c8392b630b8f4c07d8cca55e9"
                        }],
                        [{
                            text: "Now to see list or running (started / active) containers type in:",
                            command: "$ docker ps"
                        }],
                        [{
                            output: "CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                    NAMES\n" +
                                "67c5b71b4a24        postgres:alpine     \"docker-entrypoint.s…\"   32 seconds ago      Up 31 seconds       0.0.0.0:5432->5432/tcp   PostgreSQLaboratories"
                        }],
                        [{
                            text: "To see list of all containers (not only currently running) type:",
                            command: "$docker container ls -a"
                        }],
                        [{
                            output: "CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS                      PORTS                    NAMES\n" +
                                "67c5b71b4a24        postgres:alpine     \"docker-entrypoint.s…\"   2 minutes ago       Up 2 minutes                0.0.0.0:5432->5432/tcp   PostgreSQLaboratories\n" +
                                "603a9f50fce0        5b681acb1cfc        \"docker-entrypoint.s…\"   5 months ago        Exited (255) 5 months ago   0.0.0.0:5432->5432/tcp   postgresPASSWORD2\n" +
                                "f0ef0e1f1bee        5b681acb1cfc        \"docker-entrypoint.s…\"   6 months ago        Exited (255) 5 months ago   0.0.0.0:5432->5432/tcp   postgresPASSWORD"
                        }]
                    ]
                },
                {
                    title: "Local connection to PostgreSQL inside Docker container",
                    subTitle: "direct interaction",
                    instructions: [
                        [{
                            text: "To \"directly\" interact with currently running docker containers type:",
                            command: "$ docker exec -it PostgreSQLaboratories bash"
                        }],
                        [{output: "bash-5.0#"}],
                        [{text: "Check where you are:", command: "bash-5.0# pwd"}],
                        [{output: "/"}],
                        [{text: "See what's around you:", command: "bash-5.0# ls"}],
                        [{
                            output: "bin                         etc                         media                       proc                        sbin                        tmp\n" +
                                "dev                         home                        mnt                         root                        srv                         usr\n" +
                                "docker-entrypoint-initdb.d  lib                         opt                         run                         sys                         var\n"
                        }],
                        [{
                            text: "Interact with postgres via psql inside this docker container:",
                            command: "bash-5.0# psql -U postgres"
                        }],
                        [{
                            output: "psql (12.3)\n" +
                                "Type \"help\" for help.\n" +
                                "postgres=#"
                        }],
                        [{
                            text: "Check defined roles:",
                            command: "postgres=# \\du"
                        }],
                        [{
                            output: "                                   List of roles\n" +
                                " Role name |                         Attributes                         | Member of \n" +
                                "-----------+------------------------------------------------------------+-----------\n" +
                                " postgres  | Superuser, Create role, Create DB, Replication, Bypass RLS | {}"
                        }],
                        [{
                            text: "Create new database:",
                            command: "postgres=# CREATE DATABASE test;"
                        }],
                        [{output: "CREATE DATABASE"}],
                        [{text: "List all databases:", command: "postgres=# \\l"}],
                        [{
                            output: "                                 List of databases\n" +
                                "   Name    |  Owner   | Encoding |  Collate   |   Ctype    |   Access privileges   \n" +
                                "-----------+----------+----------+------------+------------+-----------------------\n" +
                                " postgres  | postgres | UTF8     | en_US.utf8 | en_US.utf8 | \n" +
                                " template0 | postgres | UTF8     | en_US.utf8 | en_US.utf8 | =c/postgres          +\n" +
                                "           |          |          |            |            | postgres=CTc/postgres\n" +
                                " template1 | postgres | UTF8     | en_US.utf8 | en_US.utf8 | =c/postgres          +\n" +
                                "           |          |          |            |            | postgres=CTc/postgres\n" +
                                " test      | postgres | UTF8     | en_US.utf8 | en_US.utf8 | \n" +
                                "(4 rows)"
                        }],
                        [{
                            text: "Switch (connect) to newly created database:",
                            command: "postgres=# \\c test"
                        }],
                        [{
                            output: "You are now connected to database \"test\" as user \"postgres\".\n" +
                                "test=#"
                        }],
                        [{
                            text: "Show all relations inside this database:",
                            command: "test=# \\d"
                        }],
                        [{output: "Did not find any relations."}],
                        [{
                            text: "Quit psql inside container:",
                            command: "test=# \\q"
                        }],
                        [{output: "bash-5.0#"}],
                        [{
                            text: "Exit bash of the container:",
                            command: "bash-5.0# \\exit"
                        }],
                        [{output: "$"}]
                    ]
                },
                {
                    title: "Remote connection to PostgreSQL inside Docker container",
                    subTitle: "indirect interaction",
                    instructions: [
                        [{
                            text: "First check if \"psql\" is installed on your local machine (and check related flags):",
                            command: "$ psql --help"
                        }],
                        [{
                            text: "To connect to Postgres inside docker instance:",
                            command: "$ psql -h localhost -p 5432 -U postgres"
                        }],
                        [{output: "Password for user postgres:"}],
                        [{command: "******** (password input)"}],
                        [{
                            output: "psql (10.12 (Ubuntu 10.12-0ubuntu0.18.04.1), server 12.3)\n" +
                                "WARNING: psql major version 10, server major version 12.\n" +
                                "         Some psql features might not work.\n" +
                                "Type \"help\" for help.\n" +
                                "postgres=#\n"
                        }]
                    ]
                },
                {
                    title: "Credits",
                    instructions: [[{
                        text: "Instruction based on youtube video \"Docker and PostgreSQL in [10 Minutes]\" by  Amigoscode:",
                        link: "https://www.youtube.com/watch?v=aHbE3pTyG-Q"
                    }]]
                }
            ]
        }
    }
}

export default PostgreSQLInstallData;