import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import styles from './CoinScreen.style';
import {Http} from '../../libs';
import CoinsItem from '../CoinItem';

const CoinsScreen = ({navigation}) => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function getData() {
      try {
        const {data} = await Http.instance.get(
          'https://api.coinlore.net/api/tickers/',
        );
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
      {loading ? (
        <ActivityIndicator color="black" size="large" />
      ) : (
        <FlatList
          data={coins}
          renderItem={({item: {name, symbol}}) => (
            <CoinsItem name={name} symbol={symbol} />
          )}
        />
      )}
    </View>
  );
};

export default CoinsScreen;
