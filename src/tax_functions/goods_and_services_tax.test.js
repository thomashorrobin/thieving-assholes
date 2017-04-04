import { calculateGST } from './goods_and_services_tax';

it('should calculate basic gst properly', () => {
    expect(calculateGST(60000)).toEqual(9000);
});