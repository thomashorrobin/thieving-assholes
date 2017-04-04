import React, { Component } from 'react';
import { estimate_alcohol_tax } from './tax_functions/alcohol_tax';
import { estimate_fuel_tax } from './tax_functions/fuel_tax';
import { calculateGST } from './tax_functions/goods_and_services_tax';
import { income_tax } from './tax_functions/income_tax';
import { annual_tax_packets_per_day } from './tax_functions/tobacco_tax';
import './TaxReceipt.css';

class TaxReceipt extends Component {
    render(){
        const alcohol = estimate_alcohol_tax(this.props.data.alcohol);
        const fuel = estimate_fuel_tax(this.props.data.fuel);
        const gst = calculateGST(this.props.data.expenditure);
        const income = income_tax(this.props.data.income);
        const tobacco = annual_tax_packets_per_day(this.props.data.tobacco);
        const total = alcohol + fuel + gst + income + tobacco;
        return(
            <div className="tax-receipt">
                <h3>Your Tax Recepit</h3>
                <table>
                    <tbody>
                        <tr><td className="label-table">Tax on income</td><td className="table-value">${ income }</td></tr>
                        <tr><td className="label-table">Tax on gst</td><td className="table-value">${ gst }</td></tr>
                        <tr><td className="label-table">Tax on fuel</td><td className="table-value">${ fuel }</td></tr>
                        <tr><td className="label-table">Tax on alcohol</td><td className="table-value">${ alcohol }</td></tr>
                        <tr><td className="label-table">Tax on tobacco</td><td className="table-value">${ tobacco }</td></tr>
                        <tr className="table-total"><td className="label-table">Total tax</td><td>${ total }</td></tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TaxReceipt;