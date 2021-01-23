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
