import React, { Component } from 'react';

class Alcohol extends Component {
    updateAlcohol(event){
        const value = event.target.value;
        this.props.updateAlcohol(value);
    }
    render(){
        return (
            <div className="userInput">Money spent on alcohol anually: <input onChange={(event) => {this.updateAlcohol(event)}} type="number" step="200" value={this.props.alcohol}/></div>
        );
    }
}

export default Alcohol;