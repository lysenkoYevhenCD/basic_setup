import { Button, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import { Outlet } from 'react-router';

const MainLayout = () => {
  const { shape, palette } = useTheme();

  return (
    <Box component='main' height='100vh' width='100vw' sx={{ color: palette.common.blue }} borderRadius={shape.borderRadius16}>
      <Button variant='contained'>CLick</Button>
      <Outlet />
    </Box>
  );
};

export default MainLayout;
