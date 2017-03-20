import { StyleSheet } from 'react-native';

export default StyleSheet.create( {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    height: 74,
    width: 74,
    borderWidth: .5,
    borderColor: '#8e8e8e',
  },
  doubleWidth: {
    width: 148
  },
  buttonText: {
    fontSize: 30,
    fontWeight: '400',
    fontFamily: 'Helvetica'
  }
} );

export const operandButtonStyles = StyleSheet.create( {
  button: {
    backgroundColor: '#e0e0e0',
  },
  text: {
    color: '#000',
  }
} );


export const operatorButtonStyles = StyleSheet.create( {
  button: {
    backgroundColor: '#ff9900',
  },
  text: {
    color: '#fff',
  }
} );

export const functionButtonStyles = StyleSheet.create( {
  button: {
    backgroundColor: '#d6d6d6'
  },
  text: {
    color: '#000',
  }
} );
