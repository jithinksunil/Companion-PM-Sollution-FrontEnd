import { createSlice } from "@reduxjs/toolkit";

export const superUserSlice = createSlice({
  name: "superUser",
  initialState: { value: {} },
  reducers: {
    setSuperUser: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSuperUser } = superUserSlice.actions;

const superUserReducer = superUserSlice.reducer;

export default superUserReducer;
