import { createTheme } from '@mui/material';

import { MuiButton } from './overrides/MuiButton';

const terracotta = '#C35B4C';
const blue60 = '#5492DE';
const blue50 = '#2977D6';

export const muiTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: blue50,
    },
    text: {
      primary: '#F0EFED',
      secondaryText: '#9B9B9B',
      error: terracotta,
    },
    common: {
      blue: blue60,
    },
    border: {
      primary: '1px solid #313131',
      error: `2px solid ${terracotta}`,
    },
    background: {
      default: '#191919',
      //   paper: "" MODAL
    },
  },
  shape: {
    borderRadius: 1,
    borderRadius4: 4,
    borderRadius6: 6,
    borderRadius8: 8,
    borderRadius10: 10,
    borderRadius12: 12,
    borderRadius14: 14,
    borderRadius16: 16,
  },
  spacing: 1,
  components: {
    MuiButton,
  },
});
