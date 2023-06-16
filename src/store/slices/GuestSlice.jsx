import { createSlice } from "@reduxjs/toolkit";

export const guestSlice = createSlice({
  name: "guest",
  initialState: { value: {} },
  reducers: {
    setGuest: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setGuest } = guestSlice.actions;

const guestReducer = guestSlice.reducer;

export default guestReducer;
