import { createSlice } from "@reduxjs/toolkit";

export interface LimitWindowState {
  visible: boolean;
}

const initialState: LimitWindowState = {
  visible: false
};

export const limitWindowSlice = createSlice({
  name: "limitWindow",
  initialState,
  reducers: {
    isVisible: (state) => {
        state.visible = true;
    },
    isInvisible: (state) => {
        state.visible = false
    }
  }
});

export const { isInvisible, isVisible } = limitWindowSlice.actions;

export default limitWindowSlice.reducer;
