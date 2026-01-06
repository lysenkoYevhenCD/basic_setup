import { type PropsWithChildren } from 'react';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { muiTheme } from 'theme/muiTheme';

const MuiThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MuiThemeProvider;
