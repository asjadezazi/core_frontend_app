import { createSlice } from "@reduxjs/toolkit";

export const seviceSlice = createSlice({
  name: "service",
  initialState: {
    openAddPostModal: false,
    openEditProfileModal: false,
    anchorE1: null,
    anchorE2: null,
    darkMode : false,
  },
  reducers: {
    addPostModal: (state, action) => {
      state.openAddPostModal = action.payload;
    },
    editProfileModal: (state, action) => {
      state.openEditProfileModal = action.payload;
    },
    toggleMainMenu: (state, action) => {
      state.anchorE1 = action.payload;
    },
    toggleMyMenu: (state, action) => {
      state.anchorE2 = action.payload;
    },
    toggleColorMode : (state) =>{
    state.darkMode = !state.darkMode;
    }
  },
});

export const { addPostModal, editProfileModal, toggleMainMenu ,toggleMyMenu, toggleColorMode} =
  seviceSlice.actions;

export default seviceSlice.reducer;
