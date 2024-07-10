import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import appStyles from '../styles/app-styles';
import Text from '../components/Text';
import {ContentCard, Separator} from '../components';
import {ContentType} from '../types/content-types';
import {useFetchShoppingListQuery} from '../store';

function ShoppingListScreen() {
  const {data} = useFetchShoppingListQuery();

  return (
    <View style={[appStyles.fullSize]}>
      <Separator height={10} />
      <Text color="app.primary" type="title.h1" textAlign="center">
        Shopping List
      </Text>
      <Separator height={40} />
      <FlatList
        data={data}
        decelerationRate="fast"
        snapToAlignment="center"
        initialNumToRender={data?.length}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.name}
        renderItem={({item}) => (
          <View style={styles.container}>
            <ContentCard type={ContentType.product} data={item} />
            <Separator height={20} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
});

export default ShoppingListScreen;
