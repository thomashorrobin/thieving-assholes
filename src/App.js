import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './containers/form/Form';
import TaxReceipt from './containers/taxreceipt/TaxReceipt';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: {
        income: 0,
        fuel: 0,
        alcohol: 0,
        tobacco: 0,
        expenditure: 0
      }
    }
  }

  updateData(newData){
    this.setState({ data: newData });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>THIEVING ASSHOLES</h2>
        </div>
        <p className="App-intro">
          Calculate your real gross tax
        </p>
        <Form data={ this.state.data } updateData={ this.updateData.bind(this) } />
        <TaxReceipt data={ this.state.data } />
      </div>
    );
  }
}

export default App;
