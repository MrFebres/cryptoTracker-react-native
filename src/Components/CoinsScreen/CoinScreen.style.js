import {StyleSheet} from 'react-native';
import Colors from '../../utils/colors';

export default StyleSheet.create({
  btn: {
    backgroundColor: 'blue',
    borderRadius: 8,
    margin: 16,
    padding: 8,
    width: '90%',
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
  },
  container: {
    backgroundColor: Colors.charade,
    flex: 1,
  },
  titleText: {
    color: 'white',
    textAlign: 'center',
  },
});
