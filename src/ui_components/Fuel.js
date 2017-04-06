import React, { Component } from 'react';

class Fuel extends Component {
    updateFuel(event){
        const value = event.target.value;
        this.props.updateFuel(value);
    }
    render(){
        return (
            <div className="userInput">Money spent on fuel anually: <input onChange={(event) => { this.updateFuel(event); }} type="number" step="500" value={this.props.fuel}/></div>
        );
    }
}

export default Fuel;