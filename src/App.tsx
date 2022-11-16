import { ReactElement } from 'react';
import {
  Card,
  CardContent,
  createTheme,
  Stack,
  ThemeProvider,
  Typography,
} from '@mui/material';

import { TCustomer2 } from './types';
import { customers, customers2 } from './mocks/data';
import { Searchfield } from './Searchfield';

const theme = createTheme();

const App = (): ReactElement => {
  const getOptionLabel = (option: TCustomer2): string => {
    return option.fullName;
  };

  return (
    <ThemeProvider theme={theme}>
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{ height: '100%' }}
      >
        <Card sx={{ width: '500px' }}>
          <header style={{ marginBottom: '32px', padding: '16px' }}>
            <Typography variant="h3">React Generics</Typography>
          </header>
          <CardContent>
            <Stack direction="column" spacing={5}>
              <Stack spacing={2}>
                <Typography variant="subtitle2">
                  Data model that follows MUI pattern:
                </Typography>
                <Searchfield inputLabel="Select customer" options={customers} />
              </Stack>
              <Stack spacing={2}>
                <Typography variant="subtitle2">
                  Data model that is not follows MUI pattern:
                </Typography>
                <Searchfield
                  getOptionLabel={getOptionLabel}
                  inputLabel="Select DBZ Character"
                  options={customers2}
                />
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </ThemeProvider>
  );
};

export default App;
