import React from 'react';
import {Text, View} from 'react-native';
import FavoritesEmpty from './FavoritesEmpty';
import styles from './FavoritesScreen.style';

const FavoritesScreen = () => {
  return (
    <View style={styles.container}>
      <FavoritesEmpty />
    </View>
  );
};

export default FavoritesScreen;
