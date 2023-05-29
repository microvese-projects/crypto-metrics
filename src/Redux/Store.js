import { configureStore } from '@reduxjs/toolkit';
import currenciesSliceReducer from './Currencies/currenciesSlice';
import currencyRatesReducer from './Currencies/currencyRatesSlice';

const store = configureStore({
  reducer: {
    currencies: currenciesSliceReducer,
    rates: currencyRatesReducer,
  },
});

export default store;
