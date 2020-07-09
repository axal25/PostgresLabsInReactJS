import React, {Component} from "react";
import Text from "./text/text";
import Link from "./link/link";
import Command from "./command/command";
import Output from "./output/output";

class Instruction extends Component {

    render() {
        return this.props.instruction
            ? this.renderTextLinkCommandOutput(this.props.instruction)
            : null;
    }

    renderTextLinkCommandOutput(instruction) {
        return (
            <div id={`instruction`}>
                <Text classNames={this.props.classNames} text={instruction.text}/>
                <Link classNames={this.props.classNames} link={instruction.link}/>
                <Command classNames={this.props.classNames} command={instruction.command}/>
                <Output classNames={this.props.classNames} output={instruction.output}/>
            </div>
        );
    }
}

export default Instruction;