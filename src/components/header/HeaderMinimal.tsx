import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

export type HeaderMinimalProps = {
  left?: React.ReactNode;
  centerUp?: React.ReactNode;
  centerDown?: React.ReactNode;
  right?: React.ReactNode;
};

export default function HeaderMinimal({ centerDown, centerUp, left, right }: HeaderMinimalProps) {
  //

  return (
    //

    <AppBar position="sticky">
      <Toolbar sx={{ display: 'flex' }}>
        <Box
          display="flex"
          width="100%"
          gap={2}
          sx={{
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
          }}
        >
          <Box>{left}</Box>
          <Box flex="1 1 auto" minWidth={0}>
            <Box display="flex" width="100%" flexDirection="column" alignItems="center">
              {centerUp}
              {centerDown}
            </Box>
          </Box>

          <Box>{right}</Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
