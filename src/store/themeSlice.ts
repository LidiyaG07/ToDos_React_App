import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const loadThemeFromStorage = (): boolean => {
  try {
    const saved = localStorage.getItem('theme');
    return saved ? JSON.parse(saved) : false;
  } catch {
    return false;
  }
};

interface ThemeState {
  isDarkMode: boolean;
}

const initialState: ThemeState = {
  isDarkMode: loadThemeFromStorage(),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem('theme', JSON.stringify(state.isDarkMode));
    },
    setTheme: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
      localStorage.setItem('theme', JSON.stringify(state.isDarkMode));
    },
  },
});

export default themeSlice.reducer;
export const { toggleTheme, setTheme } = themeSlice.actions;

export {};
