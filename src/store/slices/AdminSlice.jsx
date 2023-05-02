import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
  name: "admin",
  initialState: { value: {} },
  reducers: {
    setAdmin: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setAdmin } = adminSlice.actions;

const adminReducer = adminSlice.reducer;

export default adminReducer;
