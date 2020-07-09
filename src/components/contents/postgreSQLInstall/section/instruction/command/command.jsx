import React, {Component} from "react";
import Text from "../text/text";

class Command extends Component {
    render() {
        return this.getCommandIfCommand(this.props.command);
    }

    getCommandIfCommand(command) {
        return command
            ? Array.isArray(command)
                ? command.map((singleCommand, singleCommandIndex) => {
                    return <React.Fragment key={singleCommandIndex}>
                        {singleCommandIndex !== 0 ? <Text classNames={this.props.classNames} text={"or"}/> : null}
                        {this.getSingleCommand(singleCommand)}
                    </React.Fragment>
                })
                : this.getSingleCommand(command)
            : null;
    }

    getSingleCommand(command) {
        return <span className={this.props.classNames.badges.parents.smallText}>
            <span className={this.props.classNames.spans.success}>
                {command}
            </span>
        </span>;
    }
}

export default Command;