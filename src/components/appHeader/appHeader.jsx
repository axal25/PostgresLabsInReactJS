import React, {Component} from "react";
import postgresLogo from "../../../public/logos/postgres_logo.png";

class AppHeader extends Component {
    state = {};

    render() {
        return (
            <div className={this.props.classNames.divs.header}>
                <img
                    src={postgresLogo}
                    className="Static-main-logo"
                    alt="Static-main-logoAlt"
                />
                <h2>
                    <span className={this.props.classNames.spans.headerTitle}>PostgreSQL Laboratories</span>
                </h2>
            </div>
        );
    }
}

export default AppHeader;
