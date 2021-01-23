import React from 'react';
import {Text, View} from 'react-native';

const CoinsItem = ({name, symbol}) => (
  <View>
    <Text>{`${name} – ${symbol}`}</Text>
  </View>
);

export default CoinsItem;
