import React, { Component } from 'react';

class Alcohol extends Component {
    updateAlcohol(){
        const value = document.getElementById('alcohol-input').value;
        this.props.updateAlcohol(value);
    }
    render(){
        return (
            <div className="userInput">Money spent on alcohol anually: <input id="alcohol-input" onChange={this.updateAlcohol.bind(this)} type="number" step="200" value={this.props.alcohol}/></div>
        );
    }
}

export default Alcohol;