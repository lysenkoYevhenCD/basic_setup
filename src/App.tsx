import { createBrowserRouter, RouterProvider } from 'react-router';
import { Toaster } from 'sonner';

import TanstackProvider from './providers/Tanstack.provider';
import MuiThemeProvider from './providers/MuiTheme.provider';
import { routes } from './router';

const App = () => {
  const router = createBrowserRouter(routes);

  return (
    <TanstackProvider>
      <MuiThemeProvider>
        <Toaster richColors />
        <RouterProvider router={router} />
      </MuiThemeProvider>
    </TanstackProvider>
  );
};

export default App;
