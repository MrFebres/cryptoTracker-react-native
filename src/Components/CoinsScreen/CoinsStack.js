import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CoinsScreen from './index';
import CoinDetailScreen from '../CoinDetailScreen';

const {Navigator, Screen} = createStackNavigator();

const CoinsStack = () => (
  <Navigator>
    <Screen name="Coins" component={CoinsScreen} />
    <Screen name="Coin Detail" component={CoinDetailScreen} />
  </Navigator>
);

export default CoinsStack;
