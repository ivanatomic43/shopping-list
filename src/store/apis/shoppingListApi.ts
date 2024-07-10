import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {ShowProductDto} from '../../types/content-types';

const shoppingListApi = createApi({
  reducerPath: 'shoppingList',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://makeup-api.herokuapp.com/api/v1',
  }),
  endpoints(builder) {
    return {
      fetchShoppingList: builder.query<ShowProductDto[], void>({
        query: () => {
          return {
            url: '/products.json?brand=maybelline',
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const {useFetchShoppingListQuery} = shoppingListApi;
export {shoppingListApi};
