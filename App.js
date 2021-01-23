import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import CoinsStack from './src/Components/CoinsScreen/CoinsStack';
import FavoritesStack from './src/Components/Favorites';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Colors from './src/utils/colors';

const {Navigator, Screen} = createBottomTabNavigator();

const App = () => (
  <NavigationContainer>
    <Navigator
      tabBarOptions={{
        inactiveTintColor: '#fefefe',
        style: {
          backgroundColor: Colors.blackPearl,
        },
      }}>
      <Screen
        name="Coins"
        component={CoinsStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              style={{height: size, tintColor: color, width: size}}
              source={require('cryptoTracker/src/assets/bank.png')}
            />
          ),
        }}
      />
      <Screen
        name="Favorites"
        component={FavoritesStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              style={{height: size, tintColor: color, width: size}}
              source={require('cryptoTracker/src/assets/star.png')}
            />
          ),
        }}
      />
    </Navigator>
  </NavigationContainer>
);

export default App;
