// SimpleCalculator uses CalculatorMath as it's base
// and only adds 4 operators: "×", "÷", "+", "-"
// with precedence values and corresponding functions to evaluate operands

import CalculatorMath from './calculatorMath';

const calculatorMath = new CalculatorMath();

// Add operators to calculatorMath
calculatorMath.addOperator( "×", 3, (op0, op1) => op0 * op1  );
calculatorMath.addOperator( "÷", 3, (op0, op1) => op1 / op0  );
calculatorMath.addOperator( "+", 4, (op0, op1) => op0 + op1  );
calculatorMath.addOperator( "-", 4, (op0, op1) => op1 - op0  );

export default calculatorMath;
