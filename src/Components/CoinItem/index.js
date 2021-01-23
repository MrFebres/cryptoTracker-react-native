import React from 'react';
import {Text, View} from 'react-native';
import styles from './CoinItem.style';

const CoinsItem = ({name, symbol}) => (
  <View style={styles.container}>
    <View style={styles.row}>
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.symbolText}>{symbol}</Text>
    </View>
  </View>
);

export default CoinsItem;
