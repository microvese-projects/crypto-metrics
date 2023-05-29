import { configureStore } from '@reduxjs/toolkit';
import currenciesSliceReducer from './Currencies/currenciesSlice';

const store = configureStore({
  reducer: {
    currencies: currenciesSliceReducer,
  },
});

export default store;
