import { createSlice } from "@reduxjs/toolkit";

export const projectManagerSlice = createSlice({
  name: "projectManager",
  initialState: { value: {} },
  reducers: {
    setProjectManager: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setProjectManager } = projectManagerSlice.actions;

const projectManagerReducer = projectManagerSlice.reducer;

export default projectManagerReducer;
