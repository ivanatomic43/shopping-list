import React from 'react';
import {View} from 'react-native';
import appStyles from '../styles/app-styles';
import {useRoute} from '@react-navigation/native';
import Text from '../components/Text';
import {ContentImage, Separator} from '../components';
import {ScrollView} from 'react-native-gesture-handler';

function ProductScreen() {
  const route = useRoute<any>();
  const {product} = route.params;

  return (
    <ScrollView>
      <View style={[appStyles.fullSize]}>
        <ContentImage width={'100%'} imageUri={product.image_link} />
        <Separator height={10} />
        <Text color="app.primary" type="title.h2" textAlign="center">
          {product.name}
        </Text>
        <Separator height={20} />
        <Text type="body.small" color="app.primary" textAlign="center">
          {product.brand.toUpperCase()}
        </Text>
        <Separator height={15} />
        <Text color="layout.black" type="body.small" textAlign="center">
          {product.description}
        </Text>
        <Separator height={20} />
        <Text color="app.secondary" type="title.h3" textAlign="center">
          Price: {product.price} $
        </Text>
        <Separator height={30} />
      </View>
    </ScrollView>
  );
}

export default ProductScreen;
