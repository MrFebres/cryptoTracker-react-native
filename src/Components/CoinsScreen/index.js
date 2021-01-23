import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './CoinScreen.style';

const CoinsScreen = ({navigation}) => (
  <View style={styles.container}>
    <Text style={styles.titleText}>Coins Screen</Text>
    <Pressable
      onPress={() => navigation.navigate('Coin Detail')}
      style={styles.btn}>
      <Text style={styles.btnText}>Ir a detail</Text>
    </Pressable>
  </View>
);

export default CoinsScreen;
