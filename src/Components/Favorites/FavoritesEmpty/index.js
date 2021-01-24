import React from 'react';
import {Text, View} from 'react-native';
import styles from './FavoritesEmpty.style';

const FavoritesEmpty = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You don't have favorites selections yet</Text>
    </View>
  );
};

export default FavoritesEmpty;
