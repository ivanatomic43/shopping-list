import type {NavigatorScreenParams} from '@react-navigation/native';
import type {ShowProductDto} from '../types/content-types';
export type ShoppingStackParamsList = {
  ShoppingList: undefined;
};

export type MainTabParamsList = {
  ShoppingList: NavigatorScreenParams<ShoppingStackParamsList>;
};

export type MainStackParamsList = {
  MainTab: NavigatorScreenParams<MainTabParamsList>;
};

export type RootStackParamsList = {
  MainStack: NavigatorScreenParams<MainStackParamsList>;
  Product: {product: ShowProductDto};
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamsList {}
  }
}
