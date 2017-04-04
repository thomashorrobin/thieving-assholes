import React, { Component } from 'react';

class Income extends Component {
    updateIncome() {
        const value = document.getElementById('income-input').value;
        this.props.updateIncome(value);
    }
    render(){
        return (
            <div className="userInput">Income: <input id="income-input" value={this.props.income} onChange={this.updateIncome.bind(this)} type="number" step="5000"/></div>
        );
    }
}

export default Income;