import React, { Component } from 'react';

class Fuel extends Component {
    updateFuel(){
        const value = document.getElementById('fuel-input').value;
        this.props.updateFuel(value);
    }
    render(){
        return (
            <div className="userInput">Money spent on fuel anually: <input onChange={this.updateFuel.bind(this)} id="fuel-input" type="number" step="500" value={this.props.fuel}/></div>
        );
    }
}

export default Fuel;