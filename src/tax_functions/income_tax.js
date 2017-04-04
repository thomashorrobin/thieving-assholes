function calculate_tax_for_bracket(income, lower_bracket, upper_bracket, tax_rate) {
    if (upper_bracket == null && income > lower_bracket) return tax_rate * (income - lower_bracket);
    else if (income <= lower_bracket) return 0;
    else if (income >= upper_bracket) return tax_rate * (upper_bracket - lower_bracket);
    else {
        let income_to_be_taxed = income - lower_bracket;
        return Math.round(income_to_be_taxed * tax_rate * 100)/100;
    }
}

export function income_tax(income) {
    let tax_total = 0;
    tax_total += calculate_tax_for_bracket(income, 0, 14000, 0.105);
    tax_total += calculate_tax_for_bracket(income, 14000, 48000, 0.175);
    tax_total += calculate_tax_for_bracket(income, 48000, 70000, 0.3);
    tax_total += calculate_tax_for_bracket(income, 70000, null, 0.33);
    return tax_total;
}