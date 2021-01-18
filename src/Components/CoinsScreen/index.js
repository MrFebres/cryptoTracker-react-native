import React from 'react';
import {View, Text, Pressable} from 'react-native';

const CoinsScreen = () => {
  const handlePress = (e) => {
    console.log('go to detail', e);
  };

  return (
    <View>
      <Text>Coins Screen</Text>
      <Pressable onPress={handlePress}>
        <Text>Ir a detail</Text>
      </Pressable>
    </View>
  );
};

export default CoinsScreen;
