import { income_tax } from './income_tax';

it('returns zero for an income of zero', () => {
    expect(income_tax(0)).toEqual(0);
});
it('calculates tax in the first bracket ($0 to $14,000) correctly', () => {
    expect(income_tax(11555.00)).toEqual(1213.27);
});
it('calculates tax in the second bracket ($14,000 to $48,000) correctly', () => {
    expect(income_tax(20555.00)).toEqual(2617.13);
});
it('calculates tax in the third bracket ($48,000 to $70,000) correctly', () => {
    expect(income_tax(60555)).toEqual(11186.50);
});
it('calculates tax in the fourth bracket ($70,000+) correctly', () => {
    expect(income_tax(120555.00)).toEqual(30703.15);
});