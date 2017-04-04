import { annual_tax_packets_per_day, annual_tax_packets_per_week } from './tobacco_tax';

it('calculates 2 packs a day correctly', () => {
    expect(annual_tax_packets_per_day(2)).toEqual(10776.7);
});
it('calculates 3 packs a week correctly', () => {
    expect(annual_tax_packets_per_week(3)).toEqual(2302.97);
});