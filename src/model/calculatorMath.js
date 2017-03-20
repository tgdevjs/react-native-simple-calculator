// Calculator Math evaluates both infix and postfix expressions
// by using an array of operators to


export default class CalculatorMath {

  constructor() {

    this.operatorList = [];

  }

  // Add operator to operatorList
  // by defining the op "key" as a String,
  // the op "precedence" as an Integer where the lower value takes higher precedence (https://en.wikipedia.org/wiki/Order_of_operations)
  // the op "expresson" as Function
  // example: addOperator( "×", 3, (op0, op1) => op0 * op1  );
  addOperator( key, precedence, expression ){

    this.operatorList[key] =  { key, precedence, expression };

  }

  // Evaluate Infix and return a postfix op stack
  evaluateInfix( infixOpStack ) {

    const postfixOpStack = this.convertToPostfix(infixOpStack);

    if ( postfixOpStack ) {

      const { result } = this.evaluatePostfix(postfixOpStack);

      return result;

    } else {

      return 0;

    }

  }

  // Recurively evaluate postfix op stack and return { result, remainingOps}
  evaluatePostfix(postfixOpStack){

    if (postfixOpStack.length){

      // Copy remaining ops and pop last op
      const remainingOps = [...postfixOpStack];
      const op = remainingOps.pop();

      // Return result if operand
      if ( this.isNumeric(op) ) {

        return {result: op, remainingOps};

      }else if ( op ){

        // Binary Operation
        const binaryOperator = op;

        // Recursively get the value of the operand0 with the remainingOps
        const { result: op0, remainingOps: remainingOps0 } = this.evaluatePostfix(remainingOps);

        if ( op0 ) {

          // Recursively get the value of the operand1 with the remainingOps
          const { result: op1, remainingOps: remainingOps1 } = this.evaluatePostfix(remainingOps0);

          if ( op1 ) {

            let result = this.getOperation( binaryOperator )( op0, op1 );

            return { result, remainingOps: remainingOps1 };

          } else {

            return { result: op0, remainingOps: remainingOps0};

          }// End if op1

        } // End if op0

      } // End if-else isNumeric(op)

    } // End if ops.length

    // All other results return null
    return { result: null };

  }

  //*****************
  // Convert infix to postfix
  convertToPostfix(infixOpStack){

    let postfixOpStack = [];
    let operatorStack = [];

    for(let op of infixOpStack){

      // Operand?
      if ( this.isNumeric(op) ) {

        // Add current op to operatorStack
        postfixOpStack.push(op);

      }else if ( this.isOperator(op) ) {

        // Is operatorStack is empty ?
        if (operatorStack.length) {

          // Pop last op on operationStack and append to postfixStack while it has higher precedence than current op
            while( operatorStack.length && this.hasHigherOrEqualPrecedence( operatorStack[operatorStack.length - 1], op ) ) {

              // While current op has higher precedence, pop last operator off of operatorStack and add it to the postfixOpStack
              postfixOpStack.push(operatorStack.pop());

          }

          // Add current op to operatorStack
          operatorStack.push(op);

        } else {

          // Add current op to operatorStack
          operatorStack.push(op);

        } // End if-else operatorStack.length
      } else {

        return null;

      } // End if-else isNumeric and isOperator
    } // End for

    // Empty out operatorStack onto postfixOpStack
    while ( operatorStack.length)
    {
        // Pop last operator off of operatorStack and add it to the postfixOpStack
        postfixOpStack.push(operatorStack.pop());

    }

    return postfixOpStack;

  }


  //*****************
  // Operator helpers
  isNumeric(n) {

    return !isNaN(parseFloat(n)) && isFinite(n);

  }

  isOperator(op) {

    return this.operatorList[op] ? true: false;

  }

  getOperation(op) {

    return this.operatorList[op].expression;

  }

  hasHigherOrEqualPrecedence(op0, op1) {

    const precedence0 = this.operatorList[op0].precedence;
    const precedence1 = this.operatorList[op1].precedence;

    return precedence0 <= precedence1;

  }

}
