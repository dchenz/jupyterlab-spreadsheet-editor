declare module '@jspreadsheet/formula' {
  type FormulaFunction = (value: any, ...args: any[]) => any;

  interface Formula {
    setFormula(formulas: Record<string, FormulaFunction>): void;
  }

  const formula: Formula;

  export default formula;
}
