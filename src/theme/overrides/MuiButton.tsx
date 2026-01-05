import type { Components, Theme } from '@mui/material/styles';

export const MuiButton: Components<Omit<Theme, 'components'>>['MuiButton'] = {
  styleOverrides: {
    root: ({ theme: { shape } }) => {
      return {
        textTransform: 'none',
        fontWeight: 500,
        borderRadius: shape.borderRadius6,
      };
    },
    contained: ({ theme: { palette } }) => {
      return {
        '&:disabled': {
          backgroundColor: palette.common.blue,
          color: palette.text.primary,
        },
        '&:hover': {
          backgroundColor: palette.primary.main,
        },
      };
    },
  },
  defaultProps: {
    variant: 'contained',
    fullWidth: true,
  },
};
