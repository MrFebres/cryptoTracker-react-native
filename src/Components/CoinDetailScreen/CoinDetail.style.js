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
  itemText: {
    color: 'white',
    fontSize: 14,
  },
  list: {
    flex: 1,
    maxHeight: 100,
    paddingLeft: 6,
  },
  marketstitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
    paddingLeft: 16,
  },
  titleText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  section: {
    maxHeight: 220,
  },
  sectionHeader: {
    backgroundColor: 'rgba(0,0,0, 0.2)',
    padding: 8,
  },
  sectionItem: {
    padding: 8,
  },
  sectionText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  subHeader: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0, 0.1)',
    flexDirection: 'row',
    padding: 16,
  },
});
