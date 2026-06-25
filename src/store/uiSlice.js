import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    mobileMenuOpen: false,
    headerScrolled: false,
  },
  reducers: {
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    closeMobileMenu: (state) => {
      state.mobileMenuOpen = false;
    },
    setHeaderScrolled: (state, action) => {
      state.headerScrolled = action.payload;
    },
  },
});

export const { toggleMobileMenu, closeMobileMenu, setHeaderScrolled } = uiSlice.actions;
export const selectMobileMenuOpen = (state) => state.ui.mobileMenuOpen;
export const selectHeaderScrolled = (state) => state.ui.headerScrolled;
export default uiSlice.reducer;
