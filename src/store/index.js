import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './languageSlice';
import inquiryReducer from './inquirySlice';
import uiReducer from './uiSlice';

export const store = configureStore({
  reducer: {
    language: languageReducer,
    inquiry: inquiryReducer,
    ui: uiReducer,
  },
});

export default store;
