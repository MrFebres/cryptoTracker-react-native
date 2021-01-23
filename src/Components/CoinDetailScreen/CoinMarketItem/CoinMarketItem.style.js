import {StyleSheet} from 'react-native';
import Colors from '../../../utils/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0, 0.1)',
    borderColor: Colors.zircon,
    borderWidth: 1,
    padding: 16,
    margin: 8,
  },
  nameText: {
    color: 'white',
    fontWeight: 'bold',
  },
  priceText: {
    color: 'white',
  },
});
