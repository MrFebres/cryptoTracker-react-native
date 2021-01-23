import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import styles from './CoinScreen.style';
import {Http} from '../../libs';
import CoinsItem from '../CoinItem';
import CoinSearch from '../CoinSearch';

const CoinsScreen = ({navigation}) => {
  const [coins, setCoins] = useState([]);
  const [allCoins, setAllCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = (query) => {
    if (query) {
      const coinstFilter = allCoins.filter(
        ({name, symbol}) =>
          name.toLowerCase().includes(query.toLowerCase()) ||
          symbol.toLowerCase().includes(query.toLowerCase()),
      );
      setCoins(coinstFilter);
    } else setCoins(allCoins);
  };

  useEffect(() => {
    setLoading(true);
    async function getData() {
      try {
        const {data} = await Http.instance.get(
          'https://api.coinlore.net/api/tickers/',
        );
        setAllCoins(data);
        setCoins(data);
      } catch (e) {
        console.error('[COINS] ', e);
      }
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <CoinSearch onChange={handleSearch} />
      {loading ? (
        <ActivityIndicator color="white" size="large" />
      ) : (
        <FlatList
          data={coins}
          renderItem={({item}) => (
            <CoinsItem
              item={item}
              onPress={() => navigation.navigate('CoinDetail', {item})}
            />
          )}
        />
      )}
    </View>
  );
};

export default CoinsScreen;
