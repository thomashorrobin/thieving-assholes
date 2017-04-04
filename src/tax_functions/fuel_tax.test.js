import { estimate_fuel_tax } from './fuel_tax';

it('should calculate basic estimate', () => {
    expect(estimate_fuel_tax(5000)).toEqual(1675);
});