import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LimitNumberState {
  value: number;
}

const initialState: LimitNumberState = {
  value: 0
};

export const limitNumberSlice = createSlice({
  name: "limit",
  initialState,
  reducers: {
    setLimit: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    }
  }
});

export const { setLimit } = limitNumberSlice.actions;

export default limitNumberSlice.reducer;
