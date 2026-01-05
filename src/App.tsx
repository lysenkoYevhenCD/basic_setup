import { createBrowserRouter, RouterProvider } from 'react-router';
import { Toaster } from 'sonner';

import { routes } from '@/router';
import TanstackProvider from '@/providers/TanstackProvider';
import MuiThemeProvider from '@/providers/MuiThemeProvider';

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
