import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Toast {
  id: number;
  message: string;
  severity: 'success' | 'info' | 'warn' | 'error';
  life?: number;
}

const toastSlice = createSlice({
  name: 'toast',
  initialState: [] as Toast[],
  reducers: {
    addToast: (state, action: PayloadAction<Toast>) => {
      state.push(action.payload);
    },
    removeToast: (state, action: PayloadAction<number>) => {
      return state.filter(toast => toast.id !== action.payload);
    },
  },
});

export const { addToast, removeToast } = toastSlice.actions;
export default toastSlice.reducer;
