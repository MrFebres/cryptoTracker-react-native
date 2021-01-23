import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  SectionList,
  Text,
  View,
} from 'react-native';
import styles from './CoinDetail.style';
import {Http, Storage} from '../../libs';
import CoinMarketItem from './CoinMarketItem';

const CoinDetailScreen = ({
  navigation,
  route: {
    params: {
      item: {
        id,
        market_cap_usd,
        name,
        nameid,
        percent_change_24h,
        symbol,
        volume24,
      },
    },
  },
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [market, setMarket] = useState([]);

  const getImgCoin = (nameid) =>
    `https://c1.coinlore.com/img/25x25/${nameid}.png`;

  const getMarkets = async () => {
    const url = `http://api.coinlore.net/api/coin/markets/?id=${id}`;
    const markets = await Http.instance.get(url);
    setMarket(markets);
  };

  useEffect(() => {
    navigation.setOptions({title: symbol});
    getMarkets();
  }, []);

  const getSections = () => [
    {
      titulo: 'Market Cap',
      data: [market_cap_usd],
    },
    {
      titulo: 'Volume 24h',
      data: [volume24],
    },
    {
      titulo: 'Change 24h',
      data: [percent_change_24h],
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <View style={styles.row}>
          <Image style={styles.iconImage} source={{uri: getImgCoin(nameid)}} />
          <Text style={styles.titleText}>{name}</Text>
        </View>

        <Pressable
          style={[
            styles.btnFavorite,
            isFavorite ? styles.btnFavoriteRemove : styles.btnFavoriteAdd,
          ]}>
          <Text style={styles.btnFavoriteText}>
            {isFavorite ? 'Remove favorite' : 'Add favorite'}
          </Text>
        </Pressable>
      </View>

      <SectionList
        keyExtractor={(item) => item}
        renderItem={({item}) => (
          <View style={styles.sectionItem}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section: {titulo}}) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionText}>{titulo}</Text>
          </View>
        )}
        sections={getSections()}
        style={styles.section}
      />

      <Text style={styles.marketstitle}>Markets</Text>
      <FlatList
        data={market}
        horizontal
        keyExtractor={(item, idx) => item.name + idx}
        renderItem={({item}) => <CoinMarketItem item={item} />}
        style={styles.list}
      />
    </View>
  );
};

export default CoinDetailScreen;
