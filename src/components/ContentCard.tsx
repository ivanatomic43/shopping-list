import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';

import {ContentImage, Pressable, Separator, Text} from '../components';
import {ShowProductDto, ContentType} from '../types/content-types';
import {Title} from '../components';
import useNavigate from '../hooks/useNavigate';
import {appStyles} from '../styles';

interface ProductCardProps {
  type: ContentType.product;
  data: ShowProductDto;
}

export type ContentCardProps = ProductCardProps;

const ContentCard: React.FC<ContentCardProps> = props => {
  const {data, type} = props;

  const {navigateToProduct} = useNavigate();

  const onPress = useCallback(() => {
    switch (type) {
      case ContentType.product:
        navigateToProduct(data);
        return;
    }
  }, [navigateToProduct, data, type]);

  console.log(data);

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Title title={data.name} />
      <Separator height={10} />
      <View style={appStyles.inlineContainer}>
        <Text type="body.small" color="app.secondary">
          Price: {data.price} $
        </Text>
        <Separator width={15} />

        <Text type="body.small" color="app.secondary">
          Brand: {data.brand.toUpperCase()}
        </Text>
      </View>

      <Separator height={7} />
      <ContentImage width={'100%'} imageUri={data.image_link} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    opacity: 1,
  },
});

export default ContentCard;
