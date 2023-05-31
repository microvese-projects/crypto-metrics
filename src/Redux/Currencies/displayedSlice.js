import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  arr: [],
  currencies: null,
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
  },
});

export const { change } = displayedSlice.actions;
export default displayedSlice.reducer;
