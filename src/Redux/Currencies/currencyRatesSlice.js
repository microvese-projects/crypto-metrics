import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  globalRates: [],
  loading: false,
  dataFetched: false,
};

export const fetchRates = createAsyncThunk('rates/fetchRates', async () => {
  try {
    const URL = 'https://apiv2.bitcoinaverage.com/constants/exchangerates/global';

    const config = {
      headers: { 'x-ba-key': 'MDZkZTBjZGYwMWJiNGJhNTg5ODIyNzMwM2FkY2E1Yzc' },
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
        state.globalRates = action.payload;
        state.loading = false;
        state.Error = null;
        state.dataFetched = true;
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
