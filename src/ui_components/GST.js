import React, { Component } from 'react';

class GST extends Component {
    updateExpenditure(event){
        const value = event.target.value;
        this.props.updateExpenditure(value);
    }
    render(){
        return (
            <div className="userInput"><span>Expenditure per year: </span><input onChange={(event) => { this.updateExpenditure(event); }} step="2000" type="number" value={this.props.expenditure}/></div>
        );
    }
}

export default GST;