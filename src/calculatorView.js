import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import {
  inject,
  observer
} from 'mobx-react/native';

import {
  OperandButton,
  OperatorButton,
  FunctionButton
} from './calculatorButton';
import styles from './styles/calculatorViewStyles';

const numberButtonValues = [7, 8, 9, 4, 5, 6, 1, 2, 3];
const operatorButtonValues = ["÷","×","-","+"];

const CalculatorView  =  inject( [ "calculatorStore" ] )( observer( ({ calculatorStore }) => {

  // Render number buttons according to numberButtonValues
  const renderNumberButtons = () => {

    return numberButtonValues.map( ( value, index ) => {

      return <OperandButton
                key={ index }
                value={ value }
                onPress={() => calculatorStore.pushOperand( value ) }
              />;

    });

  }

  // Render operator buttons according to operatorButtonValues
  const  renderOperatorButtons = () => {

    return operatorButtonValues.map( ( value, index ) => {

      return <OperatorButton
                key={ index }
                value={ value }
                onPress={ () => calculatorStore.pushOperator(value) }
              />;

    });

  }

  // Shrink display font size as numbers fill up entire display
  const shrinkDisplayFontSize = () => {
    const largeFontLengthMax = 6;
    const smallFontSizeStart = 40;
    const smallFontSizeMin = 20;
    const length = calculatorStore.displayValue.length;
    const displayFontSize = ( length > largeFontLengthMax ) ? ( smallFontSizeStart - 2 * ( length - 6 ) ) : 60;

    const size =  Math.max( displayFontSize, smallFontSizeMin );
    console.log('size', size);
    return size;
  }

  // Return components to render
  return (
    <View style={ styles.container }>
      <View style={ styles.calculatorBezel }>
        <View style={ styles.calculatorContainer } >
          <View style={ styles.displayContainer }>
            <Text style={ [ styles.displayText, { fontSize: shrinkDisplayFontSize() } ] }>{ `${ calculatorStore.displayValue }` }</Text>
            <Text style={ styles.opStackDisplayText }>{ calculatorStore.infixOpStack }</Text>
          </View>
          <View style={ styles.buttonsContainer }>
            <View style={ styles.buttonsContainerColumn0 }>
              <FunctionButton value={ "c" } onPress={ () => calculatorStore.clearStack() } />
              <FunctionButton value={ "±" } onPress={ () => calculatorStore.toggleSign() } />
              <FunctionButton value={ "%" } onPress={ () => calculatorStore.percentage() } />
              {renderNumberButtons()}
              <OperandButton value={ "0" } doubleWidth onPress={ () => calculatorStore.pushOperand( "0" ) } />
              <OperandButton value={ "." } onPress={ () => calculatorStore.decimal() } />
            </View>
            <View style={ styles.buttonsContainerColumn1 }>
              { renderOperatorButtons() }
              <OperatorButton value={ "=" } onPress={ () => calculatorStore.equals() } />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}));

export default CalculatorView;
