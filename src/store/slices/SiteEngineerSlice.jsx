import { createSlice } from "@reduxjs/toolkit";

export const siteEngineerSlice = createSlice({
  name: "siteEngineer",
  initialState: { value: {} },
  reducers: {
    setSiteEngineer: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSiteEngineer } = siteEngineerSlice.actions;

const siteEngineerReducer = siteEngineerSlice.reducer;

export default siteEngineerReducer;
