import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import styles, {
  operandButtonStyles,
  operatorButtonStyles,
  functionButtonStyles
} from './styles/calculatorButtonStyles';


export default class CalculatorButton extends Component {

  render() {

    const { buttonStyle, textStyle, onPress, value } = this.props;

    return (
      <TouchableOpacity
        style={ [ styles.container, ( this.props.doubleWidth ? styles.doubleWidth: null ), buttonStyle ] }
        onPress={ onPress }
      >
        <Text style={ [ styles.buttonText, textStyle ] }>
          { value }
        </Text>
      </TouchableOpacity>
    );

  }

}

export const OperandButton = ( props ) => {

  return (
    <CalculatorButton
      { ...props }
      buttonStyle={ operandButtonStyles.button }
      textStyle={ operandButtonStyles.text }
    />
  );

}

export const OperatorButton = (props) => {

  return (
    <CalculatorButton
      { ...props }
      buttonStyle={ operatorButtonStyles.button }
      textStyle={ operatorButtonStyles.text }
    />
  );

}

export const FunctionButton = ( props ) => {

  return (
    <CalculatorButton
      { ...props }
      buttonStyle={ functionButtonStyles.button }
      textStyle={ functionButtonStyles.text }
    />
  );
}
