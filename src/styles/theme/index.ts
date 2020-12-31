import { darkPallette, lightPallette } from './colors';

const grid = 4;

export const theme = {
  ...lightPallette,

  grid,

  space: {
    's': grid * 2,
    'm': grid * 5,
    'l': grid * 8,
  },

  borderRadius: {
    's': grid,
    'm': grid * 2,
    'l': grid * 10
  },
};

export const lightTheme = theme;

export const darkTheme = {
  ...theme,
  ...darkPallette
}