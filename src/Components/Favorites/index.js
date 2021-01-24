import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FavoritesScreen from './FavoritesScreen';
import Colors from '../../utils/colors';

const {Navigator, Screen} = createStackNavigator();

const Favorites = () => (
  <Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Colors.blackPearl,
        shadowColor: Colors.blackPearl,
      },
      headerTintColor: Colors.white,
    }}>
    <Screen name="Favorites" component={FavoritesScreen} />
  </Navigator>
);

export default Favorites;
