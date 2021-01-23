import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CoinsScreen from './index';
import CoinDetailScreen from '../CoinDetailScreen';
import Colors from '../../utils/colors';

const {Navigator, Screen} = createStackNavigator();

const CoinsStack = () => (
  <Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Colors.blackPearl,
        shadowColor: Colors.blackPearl,
      },
      headerTintColor: Colors.white,
    }}>
    <Screen name="Coins" component={CoinsScreen} />
    <Screen name="CoinDetail" component={CoinDetailScreen} />
  </Navigator>
);

export default CoinsStack;
