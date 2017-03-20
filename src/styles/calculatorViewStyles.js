import { StyleSheet } from 'react-native';

export default StyleSheet.create( {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  calculatorBezel: {
    alignItems: 'center',
    width: 320,
    backgroundColor: '#555',
    borderRadius: 20,
  },
  calculatorContainer: {
    width: 295,
    height: 520,
    backgroundColor: '#555',
    marginTop: 10,
    borderRadius: 20,
    alignItems: 'stretch'
  },
  displayContainer: {
    flex: 2,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  displayText: {
    fontSize: 60,
    fontWeight: '300',
    fontFamily: 'Helvetica',
    color: '#fff',
    marginRight: 20
  },
  opStackDisplayText: {
    fontSize: 20,
    fontFamily: 'Helvetica',
    color: '#fff',
    marginRight: 20
  },
  buttonsContainer: {
    flex: 6,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonsContainerColumn0: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
} );
