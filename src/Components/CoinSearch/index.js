import React, {useState} from 'react';
import {Platform, TextInput, View} from 'react-native';
import styles from './CoinSearch.style';

const CoinSearch = ({onChange}) => {
  const [query, setQuery] = useState('');

  const handleText = (value) => {
    setQuery(value);

    if (onChange) onChange(query);
  };

  return (
    <View>
      <TextInput
        onChangeText={(value) => handleText(value)}
        placeholder="Search Coin"
        placeholderTextColor="white"
        style={[
          styles.textInput,
          Platform.OS ? styles.textInputIOS : styles.textInputAndroid,
        ]}
        value={query}
      />
    </View>
  );
};

export default CoinSearch;
