import { createSlice } from "@reduxjs/toolkit";

export const priceSlice = createSlice({
  name: "price",
  initialState: {
    startValue: 500,
    highValue: 1000,
    lowValue: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = priceSlice.actions;

export default priceSlice.reducer;
