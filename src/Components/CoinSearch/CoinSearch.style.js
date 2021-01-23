import {StyleSheet} from 'react-native';
import Colors from '../../utils/colors';

export default StyleSheet.create({
  textInput: {
    backgroundColor: Colors.charade,
    color: 'white',
    height: 46,
    paddingLeft: 16,
  },
  textInputAndroid: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.zircon,
  },
  textInputIOS: {
    borderRadius: 8,
    margin: 8,
  },
});
