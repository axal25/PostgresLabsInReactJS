import React, {Component} from "react";

class Text extends Component {
    render() {
        return this.getText(this.props.text);
    }

    getText(text) {
        return text
            ? Array.isArray(text)
                ? text
                    .map((singleText, singleTextIndex) => {
                        return <React.Fragment key={singleTextIndex}>
                            {singleTextIndex !== 0 ? <br id={`singleTextIndex=${singleTextIndex}`}/> : null}
                            {this.getSingleText(singleText, singleTextIndex)}
                        </React.Fragment>
                    })
                : this.getSingleText(text)
            : null;
    }

    getSingleText(text) {
        return <span className={this.props.classNames.spans.instruction}>
            {text ? text : ''}
        </span>;
    }
}

export default Text;