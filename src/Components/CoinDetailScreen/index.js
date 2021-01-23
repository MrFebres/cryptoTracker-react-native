import React, {useEffect} from 'react';
import {Image, View, Text} from 'react-native';
import styles from './CoinDetail.style';

const CoinDetailScreen = ({
  navigation,
  route: {
    params: {
      item: {name, nameid, symbol},
    },
  },
}) => {
  const url = (nameid) => `https://c1.coinlore.com/img/25x25/${nameid}.png`;

  useEffect(() => {
    navigation.setOptions({title: symbol});
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <Image style={styles.iconImage} source={{uri: url(nameid)}} />
        <Text style={styles.titleText}>{name}</Text>
      </View>
    </View>
  );
};

export default CoinDetailScreen;
