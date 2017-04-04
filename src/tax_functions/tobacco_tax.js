const tax_per_batch = 738.13;
const size_per_batch = 1000;
const standard_packet_size = 20;

function tax_on_packet() {
    return tax_per_batch * standard_packet_size / size_per_batch;
}

export function annual_tax_packets_per_week(packets_per_week){
    return Math.round(packets_per_week * 52 * tax_on_packet() * 100)/100;
}

export function annual_tax_packets_per_day(packets_per_day){
    return Math.round(packets_per_day * 365 * tax_on_packet() * 100)/100;
}