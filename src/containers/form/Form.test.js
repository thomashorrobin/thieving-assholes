import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const data = {
        income: 80000,
        fuel: 5000,
        alcohol: 1500,
        tobacco: 2,
        expenditure: 65000
      }
  ReactDOM.render(<Form data={data} />, div);
});
