import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import styles from './CoinItem.style';

const CoinsItem = ({
  item: {name, percent_change_1h, price_usd, symbol},
  onPress,
}) => (
  <Pressable onPress={onPress} style={styles.container}>
    <View style={styles.row}>
      <Text style={styles.symbolText}>{symbol}</Text>
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.priceText}>{`$ ${price_usd}`}</Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.percentText}>{`${percent_change_1h} %`}</Text>
      <Image
        source={
          percent_change_1h > 0
            ? require('../../assets/arrow_up.png')
            : require('../../assets/arrow_down.png')
        }
        style={styles.imageIcon}
      />
    </View>
  </Pressable>
);

export default CoinsItem;
