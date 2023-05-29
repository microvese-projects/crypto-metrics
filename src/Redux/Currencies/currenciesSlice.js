import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  Data: [],
  loading: false,
  isFetched: false,
  Error: null,
};

export const fetchCurrencies = createAsyncThunk('currencies/fetchCurrencies', async () => {
  try {
    const URL = 'https://rest.coinapi.io/v1/assets';

    const config = {
      headers: { 'X-CoinAPI-Key': 'E745E079-5EE8-4926-85BC-9FC113C38AF4' },
    };

    const res = await axios.get(URL, config);
    return res.data;
  } catch (err) {
    return err.message;
  }
});

const currenciesSlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrencies.fulfilled, (state, action) => {
        const required = ['BTC', 'ETH', 'USDT', 'LTC', 'DOGE', 'TES'];
        const fetched = action.payload;
        const filtered = fetched.filter((each) => required.includes(each.asset_id));
        state.Data = filtered;
        state.loading = false;
        state.Error = null;
        state.isFetched = true;
      })
      .addCase(fetchCurrencies.rejected, (state, action) => {
        state.Error = action.payload;
        state.loading = false;
      })
      .addCase(fetchCurrencies.pending, (state) => {
        state.loading = true;
      });
  },
});

export default currenciesSlice.reducer;
