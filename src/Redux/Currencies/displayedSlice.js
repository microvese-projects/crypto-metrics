import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  arr: [],
  currencies: null,
  converted: {
    id: null,
    rate: null,
  },
};

const displayedSlice = createSlice({
  name: 'displayed',
  initialState,
  reducers: {
    change: (state, action) => {
      state.arr = action.payload.data;
      const { name } = action.payload;
      if (name.toLowerCase().includes('local')) {
        state.currencies = 'local';
      } else {
        state.currencies = 'global';
      }
    },
    setRate: (state, action) => {
      state.converted = action.payload;
    },
  },
});

export const { change, setRate } = displayedSlice.actions;
export default displayedSlice.reducer;
