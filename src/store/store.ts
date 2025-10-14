import { create } from 'zustand';
import { ThemeStoreTypes } from '../types/storeTypes';

export const useThemeStore = create<ThemeStoreTypes>((set) => ({
    initialTheme: 'dark',
    toggleTheme: () => 
        set((state) => ({
            initialTheme: state.initialTheme === 'dark' ? 'light' : 'dark'
        }))
}))
