import { configureStore } from '@reduxjs/toolkit';
import currenciesSliceReducer from './Currencies/currenciesSlice';
import currencyRatesReducer from './Currencies/currencyRatesSlice';
import displayedReducer from './Currencies/displayedSlice';

const store = configureStore({
  reducer: {
    currencies: currenciesSliceReducer,
    rates: currencyRatesReducer,
    displayed: displayedReducer,
  },
});

export default store;
