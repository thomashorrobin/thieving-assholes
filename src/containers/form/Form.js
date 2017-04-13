import React, { Component } from 'react';
import GST from '../../ui_components/GST';
import Tobacco from '../../ui_components/Tobacco';
import Income from '../../ui_components/Income';
import Fuel from '../../ui_components/Fuel';
import Alcohol from '../../ui_components/Alcohol';
import './Form.css';

class Form extends Component {
    updateIncome(newIncome){
        const data = this.props.data;
        data.income = newIncome;
        this.props.updateData(data);
    }
    updateExpenditure(newExpenditure){
        const data = this.props.data;
        data.expenditure = newExpenditure;
        this.props.updateData(data);
    }
    updateTobacco(newTobacco){
        const data = this.props.data;
        data.tobacco = newTobacco;
        this.props.updateData(data);
    }
    updateFuel(newFuel){
        const data = this.props.data;
        data.fuel = newFuel;
        this.props.updateData(data);
    }
    updateAlcohol(newAlcohol){
        const data = this.props.data;
        data.alcohol = newAlcohol;
        this.props.updateData(data);
    }
    render() {
        const data = this.props.data;
        return(
            <form>
                <Income income={data.income} updateIncome={this.updateIncome.bind(this)} />
                <GST expenditure={data.expenditure} updateExpenditure={this.updateExpenditure.bind(this)} />
                <Tobacco tobacco={data.tobacco} updateTobacco={this.updateTobacco.bind(this)} />
                <Fuel fuel={data.fuel} updateFuel={this.updateFuel.bind(this)} />
                <Alcohol alcohol={data.alcohol} updateAlcohol={this.updateAlcohol.bind(this)} />
            </form>
        );
    }
}

export default Form;
