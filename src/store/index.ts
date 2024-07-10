import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {shoppingListApi} from './apis/shoppingListApi';

const store = configureStore({
  reducer: {
    [shoppingListApi.reducerPath]: shoppingListApi.reducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(shoppingListApi.middleware);
  },
});

setupListeners(store.dispatch);

export {useFetchShoppingListQuery} from './apis/shoppingListApi';
export default store;
