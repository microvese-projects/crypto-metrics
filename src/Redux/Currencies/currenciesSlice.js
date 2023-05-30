import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  localRates: [],
  loading: false,
  isFetched: false,
  Error: null,
};

export const fetchCurrencies = createAsyncThunk('currencies/fetchCurrencies', async () => {
  try {
    const URL = 'https://apiv2.bitcoinaverage.com/constants/exchangerates/local';

    const config = {
      headers: { 'x-ba-key': 'MDZkZTBjZGYwMWJiNGJhNTg5ODIyNzMwM2FkY2E1Yzc' },
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
        const data = action.payload.rates;
        const actualData = [];
        const keys = Object.keys(data);

        keys.forEach((key) => {
          actualData.push({
            id: key,
            name: `${data[key].name}`,
            rate: `${data[key].rate}`,
          });
        });

        state.localRates = actualData;
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
