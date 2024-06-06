import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: null,
  error: null,
  loading: false,
  success: false,
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    messageStart: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    messageSuccess: (state, action) => {
      state.message = action.payload;
      state.error = null;
      state.loading = false;
      state.success = true;
    },
    messageFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    },
  },
});

export const { messageStart, messageSuccess, messageFailure } =
  contactSlice.actions;

export default contactSlice.reducer;
