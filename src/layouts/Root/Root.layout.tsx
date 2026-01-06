import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import { Outlet } from 'react-router';

const RootLayout = () => {
  const { shape, palette } = useTheme();

  return (
    <Box component='main' height='100vh' width='100vw' sx={{ color: palette.common.blue }} borderRadius={shape.borderRadius16}>
      <Outlet />
    </Box>
  );
};

export default RootLayout;
