import formula from '@jspreadsheet/formula';

const FORMULA_ERROR = '#ERROR';

/**
 * MONEY returns the value formatted as a dollar amount with two decimal places.
 *
 * Examples:
 * - MONEY("1234.5") => "$1234.50"
 * - MONEY(-100)     => "-$100.00"
 * - MONEY("abc")    => "#ERROR"
 */
const MONEY = (value: unknown, symbol: string = '$'): string => {
  const amount = parseFloat(String(value));
  if (isNaN(amount)) {
    return FORMULA_ERROR;
  }
  let result = symbol + Math.abs(amount).toFixed(2);
  if (amount < 0) {
    result = '-' + result;
  }
  return result;
};

export const registerAll = () => {
  formula.setFormula({ MONEY });
  console.debug('Registered custom formulas.');
};
