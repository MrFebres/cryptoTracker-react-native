import React from 'react';
import {Text, View} from 'react-native';
import styles from './CoinMarketItem.style';

const CoinMarketItem = ({item: {name, price_usd}}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.priceText}>{price_usd}</Text>
    </View>
  );
};

export default CoinMarketItem;
