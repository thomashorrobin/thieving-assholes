import { estimate_alcohol_tax } from './alcohol_tax';

it('should calculate basic estimate', () => {
    expect(estimate_alcohol_tax(5000)).toEqual(750);
});