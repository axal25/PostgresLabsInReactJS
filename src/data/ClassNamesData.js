class ClassNamesData {
    static getClassNames() {
        return {
            spans: {
                headerTitle: "badge text-light bg-postgres Rounded-Border border-white",
                primaryTitle: "badge text-light bg-postgres Rounded-Border border-secondary",
                secondaryTitle: "badge text-light bg-postgres-light Rounded-Border border-secondary-light",
                tertiaryTitle: "badge badge-secondary m-2",
                subTitle: "badge pill-badge badge-dark m-2",
                warning: "badge badge-pill badge-warning",
                separator: "Separator badge badge-pill badge-secondary",
                primaryPill: "badge badge-pill bg-postgres border-secondary text-dark m-2",
                success: "badge badge-success text-dark m-2",
                instruction: "text-postgres",
            },
            buttons: {
                primary: {
                    autoSize: "badge m-2 btn-primary bg-postgres autoSize",
                    setWidth: "badge m-2 btn-primary bg-postgres setWidth",
                },
                secondary: "badge m-2 btn-secondary",
                tertiary: "badge m-2 btn-outline-secondary bg-postgres text-dark",
                warning: "badge m-2 btn-warning"
            },
            textAreas: {
                autoResize: "bg-postgres text-light Rounded-Border Panel-TextareaAutoresize",
                input: "bg-postgres text-light Rounded-Border"
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
                navBar: "NavBar",
                contents: "Contents",
                wrapper: "Wrapper",
                footer: "App-footer",
                sideBar: "SideBar",
                sideBarFixed: "NavBar SideBarFixed",
                postgres: "PostgreSQLInstall",
                generator: "Panel Generator",
                section: "Section Rounded-Border m-2 bg-dark",
                exercise: "Exercise",
                panel: "Panel",
                form: "form-group mb-2 Center",
                warning: "bg-warning text-dark Rounded-Border m-2 font-weight-bold Warning",
            },
            tables: {
                output: "Output bg-secondary text-dark Rounded-Border"
            },
            forms: {
                inline: "form-inline Center"
            }
        };
    }
}

export default ClassNamesData;