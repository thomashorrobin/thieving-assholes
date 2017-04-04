import React, { Component } from 'react';

class GST extends Component {
    updateExpenditure(){
        const value = document.getElementById('expenditure-input').value;
        this.props.updateExpenditure(value);
    }
    render(){
        return (
            <div className="userInput"><span>Expenditure per year: </span><input id="expenditure-input" onChange={this.updateExpenditure.bind(this)} step="2000" type="number" value={this.props.expenditure}/></div>
        );
    }
}

export default GST;