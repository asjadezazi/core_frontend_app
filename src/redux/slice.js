import { createSlice } from "@reduxjs/toolkit";

export const seviceSlice = createSlice({
  name: "service",
  initialState: {
    openAddPostModal: false,
    openEditProfileModal: false,
  },
  reducers: {
    addPostModal: (state, action) => {
      state.openAddPostModal = action.payload;
    },
    editProfileModal: (state, action) => {
      state.openEditProfileModal = action.payload;
    },
  },
});

export const { addPostModal, editProfileModal } = seviceSlice.actions;

export default seviceSlice.reducer;
