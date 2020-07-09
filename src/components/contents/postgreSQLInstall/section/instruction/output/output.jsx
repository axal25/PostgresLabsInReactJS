import React, {Component} from "react";
import LookBehindReplacement from "./LookBehindReplacement";

class Output extends Component {
    render() {
        return this.getOutputIfOutput(this.props.output);
    }

    getOutputIfOutput(output) {
        return output
            ? this.getOutputTable(output)
            : null;
    }

    getOutputTable(output) {
        const tableEntries = this.getTableEntries(output);
        const {maxColumnsInTable, columnAmountInRow} = this.getTableEntriesDimensions(tableEntries);
        return (
            <table className={this.props.classNames.tables.output}>
                <tbody>{
                    tableEntries.map((row, rowIndex) =>
                        <tr key={rowIndex}>
                            {row.map((column, columnIndex) =>
                                <th
                                    key={columnIndex}
                                    colSpan={maxColumnsInTable / columnAmountInRow[rowIndex]}
                                >
                                    {column}
                                </th>
                            )}
                        </tr>
                    )
                }
                </tbody>
            </table>
        );
    }

    getTableEntries(output) {
        return output
            .split('\n')
            .filter(row => row && row.trim() !== '')
            .map(row => row
                .split(/(\s\s+)|(\s\|)|(\|\s)|(--)|(\+)/g)
                .map(column => column
                    ? LookBehindReplacement.lookBehindReplacement(column)
                        .replace(/(\+)|(\|\s)|(\s\|)|(-(?![A-z]))/gi, '')
                        .replace(/(\|)|(\s(?![a-z",(:\d]))/gi, '')
                    : column)
                .filter(column => column && column !== '')
            ).filter(row =>
                row.length !== 0
                && (
                    row.length !== 1
                    || row[0] !== undefined
                    || row[0] !== ''
                )
            );
    }

    getTableEntriesDimensions(tableEntries) {
        let maxColumnsInTable = 0;
        let columnAmountInRow = [];
        tableEntries
            .forEach((row, rowIndex) => {
                let currentRowMaxColumns = 0;
                row.forEach((_) => {
                    currentRowMaxColumns++;
                    if (columnAmountInRow[rowIndex])
                        columnAmountInRow[rowIndex] = currentRowMaxColumns;
                    else
                        columnAmountInRow.push(currentRowMaxColumns);
                    if (maxColumnsInTable < currentRowMaxColumns)
                        maxColumnsInTable = currentRowMaxColumns;
                })
            });
        return {maxColumnsInTable, columnAmountInRow};
    }
}

export default Output;