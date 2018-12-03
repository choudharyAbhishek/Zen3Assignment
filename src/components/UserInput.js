import React, { Component } from 'react';
import '../styles/ComponentStyles.css';
import ColumnView from './ColumnDesign.js'

class UserInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfRows: 0,
            numberOfColumns: '',
            spaceBetweenRows: 0,
            spaceBetweenBoxes: 0,
            errorText: '',
            errorValue: false
        }
        this.updateRowsCount = this.updateRowsCount.bind(this);
        this.updateColumnCount = this.updateColumnCount.bind(this);
        this.updateRowsGap = this.updateRowsGap.bind(this);
        this.updateBoxesGap = this.updateBoxesGap.bind(this);
        this.updateTableView = this.updateTableView.bind(this);
    }

    updateTableView() {
        let totalRows = this.state.numberOfRows;
        let totalColumn = this.getColumnSpecifications();
        let rowView = [];
        let columnView = [];
        console.log(totalColumn);
        //const table = document.createElement("table")
/*         for(let i=0; i<totalRows; i++){
            var newRow = table.insertRow();
            for(let j=0; j<totalColumn; j++){
                //var column = document.createElement("td");
                newRow.insertCell();
                console.log("here");
            }
            //table.appendChild(row);
        }
                var rows = [];
        this.state.numberOfRows.forEach(function(numberOfRows) {
            rows.push(
              <tr />
                <td><SomePopulationComponent /></td>
                <td><SomeZoneComponent /></td>
              </tr>
            );
        }.bind(this));
//return table;
        */

    }

    updateRowsCount(e) {
        if(e.target.value > 0)
            this.setState({
                numberOfRows : e.target.value
            });
        else {
            this.setState({
                errorText : 'please add a larger number for rows',
                errorValue : true
            });
        }
        this.updateTableView();
    }

    updateColumnCount(e) {
        this.setState({
            numberOfColumns : e.target.value
        });
        this.updateTableView();
    }

    updateRowsGap(e) {
        if(e.target.value >= 0)
            this.setState({
                spaceBetweenRows : e.target.value
            });
        else {
            this.setState({
                errorText : 'please add a larger number for rows gap',
                errorValue : true
            });
        }
    }

    updateBoxesGap(e) {
        if(e.target.value >= 0)
            this.setState({
                spaceBetweenBoxes : e.target.value
            });
        else {
            this.setState({
                errorText : 'please add a larger number for boxes gap',
                errorValue : true
            });
        }
    }

    getColumnSpecifications() {
        let columnText = this.state.numberOfColumns;
        let columnSplits = columnText.split(',');
        return(columnSplits)
    }

    render() {
        return (
            <div id= "mainContainer">
            {this.state.errorValue && <h2>{this.state.errorText}</h2>}
                <div id= "userInputsContainer">
                    <input type="number" id= "userInputs" placeholder="No. of rows" onChange={this.updateRowsCount}/>
                    <input type="text" id= "userInputs" placeholder="column string" onChange={this.updateColumnCount}/>
                    <input type="number" id= "userInputs" placeholder="space between rows" onChange={this.updateRowsGap}/>
                    <input type="number" id= "userInputs" placeholder="space between boxes" onChange={this.updateBoxesGap}/>
                </div>
                <div >
                    <ColumnView />
                    {this.updateTableView()}
                </div>
            </div>
        );
    }
}

export default UserInput;
