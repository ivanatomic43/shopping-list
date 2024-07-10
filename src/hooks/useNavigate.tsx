import {useNavigation} from '@react-navigation/native';
import type {ShowProductDto} from '../types/content-types';

const useNavigate = () => {
  const navigation = useNavigation<any>();

  const navigateToProduct = (product: ShowProductDto) => {
    navigation.navigate('Product', {product});
  };
  return {
    navigateToProduct,
  };
};

export default useNavigate;
