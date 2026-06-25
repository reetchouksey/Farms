import { createSlice } from '@reduxjs/toolkit';

const STORAGE_KEY = 'pks_inquiries';

const loadInquiries = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
};

const persist = (list) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch {
    // ignore
  }
};

const emptyDraft = {
  name: '',
  mobile: '',
  village: '',
  product: '',
  message: '',
};

const inquirySlice = createSlice({
  name: 'inquiry',
  initialState: {
    draft: { ...emptyDraft },
    list: loadInquiries(),
    status: 'idle', // 'idle' | 'submitting' | 'success' | 'error'
    error: null,
  },
  reducers: {
    updateDraftField: (state, action) => {
      const { field, value } = action.payload;
      if (field in state.draft) {
        state.draft[field] = value;
      }
    },
    resetDraft: (state) => {
      state.draft = { ...emptyDraft };
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setError: (state, action) => {
      state.status = 'error';
      state.error = action.payload;
    },
    addInquiry: (state, action) => {
      const entry = {
        ...action.payload,
        id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
        timestamp: new Date().toISOString(),
      };
      state.list.unshift(entry);
      persist(state.list);
      state.status = 'success';
      state.error = null;
    },
    clearInquiries: (state) => {
      state.list = [];
      persist([]);
    },
  },
});

export const {
  updateDraftField,
  resetDraft,
  setStatus,
  setError,
  addInquiry,
  clearInquiries,
} = inquirySlice.actions;

export const selectDraft = (state) => state.inquiry.draft;
export const selectStatus = (state) => state.inquiry.status;
export const selectError = (state) => state.inquiry.error;
export const selectInquiries = (state) => state.inquiry.list;

export default inquirySlice.reducer;
