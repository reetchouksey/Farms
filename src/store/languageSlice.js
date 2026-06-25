import { createSlice } from '@reduxjs/toolkit';

const STORAGE_KEY = 'pks_lang';

const loadInitial = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'hi') return saved;
  } catch {
    // localStorage unavailable
  }
  return 'en';
};

const languageSlice = createSlice({
  name: 'language',
  initialState: {
    current: loadInitial(),
  },
  reducers: {
    setLanguage: (state, action) => {
      const lang = action.payload === 'hi' ? 'hi' : 'en';
      state.current = lang;
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch {
        // ignore
      }
    },
    toggleLanguage: (state) => {
      const next = state.current === 'en' ? 'hi' : 'en';
      state.current = next;
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // ignore
      }
    },
  },
});

export const { setLanguage, toggleLanguage } = languageSlice.actions;
export const selectLanguage = (state) => state.language.current;
export default languageSlice.reducer;
