import React, {Component} from "react";
import postgresLogo from "../../logos/postgres_logo.png";

class AppHeader extends Component {
    state = {
        title: "PostgreSQL Laboratories",
    };

    render() {
        return (
            <div className={this.props.classNames.divs.header}>
                <img
                    src={postgresLogo}
                    className="Static-main-logo"
                    alt="Static-main-logoAlt"
                />
                <h2>
                    <span className={this.props.classNames.spans.headerTitle}>{this.state.title}</span>
                </h2>
            </div>
        );
    }

    componentDidMount() {
        document.title = this.state.title;
    }
}

export default AppHeader;
