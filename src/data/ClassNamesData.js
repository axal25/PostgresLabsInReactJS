class ClassNamesData {
    constructor() {
        this.classNames = {
            spans: {
                headerTitle: "badge text-light bg-postgres Rounded-Border border-white",
                title: "badge text-light bg-postgres Rounded-Border border-secondary",
                subTitle: "badge pill-badge badge-dark m-2",
                warning: "badge badge-pill badge-warning",
                separator: "Separator badge badge-pill badge-secondary",
                secondary: "badge badge-secondary m-2",
                primaryPill: "badge badge-pill bg-postgres border-secondary text-dark m-2",
                success: "badge badge-success text-dark m-2",
                instruction: "text-postgres"
            },
            buttons: {
                primary: {
                    autoSize: "badge m-2 btn-primary bg-postgres",
                    setWidth: "badge m-2 btn-primary bg-postgres setWidth"
                },
                secondary: "badge m-2 btn-secondary"
            },
            textAreas: {
                autoResize: "bg-postgres text-light Panel-TextareaAutoresize Rounded-Border"
            },
            badges: {
                parents: {
                    smallText: "Text-Small",
                    lightBorder: "bg-light Rounded-Border"
                }
            },
            divs: {
                app: "App",
                header: "App-header",
                wrapper: "Wrapper",
                footer: "App-footer",
                instruction: "Wrap PostgreSQLInstallInstruction",
                section: "PostgreSQLInstallSection Rounded-Border m-2 bg-dark",
                navBar: "NavBar",
                postgres: "PostgreSQLInstall"
            },
            tables: {
                output: "Output bg-secondary text-dark Rounded-Border"
            }
        };
    }
}

export default ClassNamesData;