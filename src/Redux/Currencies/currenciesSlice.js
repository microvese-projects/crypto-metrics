import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Data: [],
};

const currenciesSlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {},
});

export default currenciesSlice.reducer;
