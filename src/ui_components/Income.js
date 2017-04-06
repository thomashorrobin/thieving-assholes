import React, { Component } from 'react';

class Income extends Component {
    updateIncome(event) {
        const value = event.target.value;
        this.props.updateIncome(value);
    }
    render(){
        return (
            <div className="userInput">Income: <input value={this.props.income} onChange={(event) => this.updateIncome(event)} type="number" step="5000"/></div>
        );
    }
}

export default Income;