import { createSlice } from "@reduxjs/toolkit";

export const seviceSlice = createSlice({
  name: "service",
  initialState: { openAddPostModal: false },
  reducers: {
    addPostModal: (state, action) => {
      state.openAddPostModal = action.payload;
    },
  },
});

export const { addPostModal } = seviceSlice.actions;

export default seviceSlice.reducer;
