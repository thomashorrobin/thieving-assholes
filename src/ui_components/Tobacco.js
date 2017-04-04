import React, { Component } from 'react';

class Tobacco extends Component {
    constructor(){
        super();
        this.state = {
            doesSmoke: false
        }
    }
    someFunction(){
        if (this.state.doesSmoke) {
            this.props.updateTobacco(0);
        }
        this.setState({ doesSmoke: !this.state.doesSmoke });
    }
    updateTobacco(){
        const value = document.getElementById('tobacco-input').value;
        this.props.updateTobacco(value);
    }
    render(){
        let x = <div>Packets per day: <input id="tobacco-input" onChange={this.updateTobacco.bind(this)} type="number" value={this.props.tobacco}/></div>

        return (
            <div className="userInput">
                Do you smoke? <input value={this.state.doesSmoke} onChange={this.someFunction.bind(this)} type="checkbox"/><br />
                { this.state.doesSmoke ? x : null }
            </div>
        );
    }
}

export default Tobacco;