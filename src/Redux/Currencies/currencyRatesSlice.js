import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  Data: [],
  loading: false,
  isFetched: false,
  Error: null,
};

export const fetchRates = createAsyncThunk('rates/fetchRates', async (action) => {
  try {
    const URL = `https://rest.coinapi.io/v1/exchangerate/${action.payload}?invert=false`;

    const config = {
      headers: { 'X-CoinAPI-Key': 'E745E079-5EE8-4926-85BC-9FC113C38AF4' },
    };

    const res = await axios.get(URL, config);
    return res.data;
  } catch (err) {
    return err.message;
  }
});

const currencyRatesSlice = createSlice({
  name: 'rates',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRates.fulfilled, (state, action) => {
        const required = ['BTC', 'ETH', 'USDT', 'LTC', 'DOGE', 'TES'];
        const fetched = action.payload;
        const filtered = fetched.filter((each) => required.includes(each.asset_id));
        state.Data = filtered;
        state.loading = false;
        state.Error = null;
        state.isFetched = true;
      })
      .addCase(fetchRates.rejected, (state, action) => {
        state.Error = action.payload;
        state.loading = false;
      })
      .addCase(fetchRates.pending, (state) => {
        state.loading = true;
      });
  },
});

export default currencyRatesSlice.reducer;
