import {StyleSheet} from 'react-native';
import Colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.charade,
    flex: 1,
    flexDirection: 'column',
  },
  iconImage: {
    backgroundColor: 'white',
    borderRadius: 50,
    height: 25,
    width: 25,
  },
  titleText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  subHeader: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0, 0.1)',
    flexDirection: 'row',
    padding: 16,
  },
});
