import React, { Component } from 'react';
import { Provider } from 'mobx-react/native';

import CalculatorView from './calculatorView';
import calculatorStore from './model/calculatorStore';

export default class App extends Component {

  render() {

    return (
      <Provider calculatorStore={calculatorStore} >
        <CalculatorView />
      </Provider>
    );

  }
  
}
