import { action, observable } from "mobx";
import simpleCalculator from './simpleCalculator';

class CalculatorStore {

  @observable displayValue = "0";
  @observable infixOpStack = [];

  @action("clearStack") clearStack() {

    this.displayValue = "0";
    this.infixOpStack = [];

  }

  @action("push operand") pushOperand(operand){

    // Check for existing Operand in op stack
    if ( this.infixOpStack.length  && simpleCalculator.isNumeric( this.infixOpStack[this.infixOpStack.length - 1] ) ) {

      // Append operand to existing op
      this.displayValue = this.displayValue === '0' ? String(operand) : this.displayValue + operand

      this.infixOpStack = [...this.infixOpStack.slice(0, this.infixOpStack.length - 1), parseFloat(this.displayValue) ];

    }else {

      // Add operand to end of stack
      this.displayValue = String(operand);

      this.infixOpStack = [...this.infixOpStack, parseFloat(this.displayValue)];

    }
  }

  @action("push operator") pushOperator(operator){

    // Check if op stack is empty
    if ( !this.infixOpStack.length) {

      if (!this.displayValue) {

        // No display value and no infixOpStack, so do nothing and return
        return;

      }else {

        // The display value is present and is the result of another operation, so add it to opStack with operator
        this.infixOpStack = [ parseFloat(this.displayValue), operator];

      }

    } else if( simpleCalculator.isOperator( this.infixOpStack[ this.infixOpStack.length - 1 ] ) ) {

      // Already an operator in op stack, so replace last operator
      this.infixOpStack = [...this.infixOpStack.slice( 0, this.infixOpStack.length - 1 ), operator ];

    } else {

      // No operator in op stack, so add operator to end of stack
      this.infixOpStack = [...this.infixOpStack, operator ];

    }

    this.displayValue = String( simpleCalculator.evaluateInfix( this.infixOpStack ) );

  }

  @action("equals") equals() {

    this.displayValue = simpleCalculator.evaluateInfix( this.infixOpStack ) || 0;

    this.infixOpStack= [];

  }

  @action("toggle sign") toggleSign() {

      this.displayValue = String( -1 * parseFloat(this.displayValue) );

  }

  @action("percentage") percentage() {

    this.displayValue = String(parseFloat(this.displayValue) / 100);

  }

  @action("decimal") decimal() {

    if (!(/\./).test(this.displayValue)) {

      this.displayValue += '.';

    }

  }

}

export default new CalculatorStore();
