import {Platform, StyleSheet} from 'react-native';
import Colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    borderBottomColor: Colors.white,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    paddingLeft: Platform.OS ? 0 : 16,
    marginLeft: Platform.OS ? 16 : 0,
  },
  imageIcon: {
    height: 22,
    marginHorizontal: 5,
    marginVertical: 0,
    width: 22,
  },
  nameText: {
    color: 'white',
    fontSize: 14,
    marginLeft: 12,
  },
  percentText: {
    color: 'white',
    fontSize: 12,
  },
  priceText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '400',
    marginLeft: 50,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  symbolText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 12,
  },
});
