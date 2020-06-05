import React, {Component} from "react";

class Instruction extends Component {
    render() {
        return this.props.instruction && this.props.instruction.length !== 0
            ? <div className={this.props.classNames.divs.instruction}>
                {this.props.instruction.map((part, index) => {
                    return (
                        <React.Fragment key={index}>
                            {this.getPart(part, index)}
                            {this.getLinkIfLink(part.link)}
                            {this.getCommandIfCommand(part.command)}
                            {this.getOutputIfOutput(part.output)}
                        </React.Fragment>
                    );
                })}
            </div>
            : null;
    }

    getPart(part, index) {
        return part.text
            ? <span className={this.props.classNames.spans.instruction}>
                {index !== 0 ? ' ' : ''}{part.text ? part.text : ''}
            </span>
            : null;
    }

    getLinkIfLink(link) {
        return link
            ? <span className={this.props.classNames.badges.parents.smallText}>
                <a href={link} className={this.props.classNames.spans.primaryPill}>
                    {link}
                </a>
            </span>
            : null;
    }

    getCommandIfCommand(command) {
        return command
            ? <span className={this.props.classNames.badges.parents.smallText}>
                <span className={this.props.classNames.spans.success}>
                    {command}
                </span>
            </span>
            : null;
    }

    getOutputIfOutput(output) {
        return output
            ? this.getTable(output)
            : null;
    }

    getTable(output) {
        let maxColumnsInTable = 0;
        let columnAmountInRow = [];
        let tableEntries = output
            .split('\n')
            .filter(row => row && row.trim() !== '')
            .map(row => row
                .split(/(\s\s+)|(\s\|)|(\|\s)|(--)|(\+)/g)
                .map(column => column
                    ? column
                        .replace(/(((?<![a-z",):\d])\s)|(\+)|(\|\s)|(\s\|)|(-(?![A-z])))/gi, '')
                        .replace(/(\|)|(\s(?![a-z",(:\d]))/gi, '')
                    : column)
                .filter(column => column && column !== '')
            );
        tableEntries = tableEntries.filter(row => row.length !== 0 && (row.length !== 1 || row[0] !== undefined || row[0] !== ''));
        tableEntries.forEach((row, rowIndex) => {
            console.log(`[${rowIndex}] row:`);
            console.log(row);
        });
        tableEntries
            .map((row, rowIndex) => {
                let currentRowMaxColumns = 0;
                row.map((column, columnIndex) => {
                    console.log(`${rowIndex}.${columnIndex}. column:"${column}"`);
                    currentRowMaxColumns++;
                    if (columnAmountInRow[rowIndex])
                        columnAmountInRow[rowIndex] = currentRowMaxColumns;
                    else
                        columnAmountInRow.push(currentRowMaxColumns);
                    if (maxColumnsInTable < currentRowMaxColumns)
                        maxColumnsInTable = currentRowMaxColumns;
                    return column;
                })
            });
        return (
            <table className={this.props.classNames.tables.output}>
                <tbody>{
                    tableEntries.map((row, rowIndex) => {
                        console.log(`row[${rowIndex}]:`);
                        console.log(row);
                        return <tr key={rowIndex}>
                            {row.map((column, columnIndex) => {
                                    console.log(`columnAmountInRow[${rowIndex}]:`);
                                    console.log(columnAmountInRow[rowIndex]);
                                    return <th
                                        key={columnIndex}
                                        colSpan={maxColumnsInTable / columnAmountInRow[rowIndex]}
                                    >
                                        {column}
                                    </th>;
                                }
                            )}
                        </tr>
                    })
                }
                </tbody>
            </table>
        );
    }
}

export default Instruction;