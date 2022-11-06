import { ReactElement } from "react";
import {
  Card,
  CardContent,
  createTheme,
  Stack,
  ThemeProvider,
} from "@mui/material";

import { TCustomer2 } from "./types";
import { customers, customers2 } from "./mocks/data";
import { Searchfield } from "./Searchfield";

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
        sx={{ height: "100%" }}
      >
        <Card sx={{ width: "500px" }}>
          <CardContent>
            <Stack direction="column" spacing={5}>
              <Searchfield inputLabel="Select customer" options={customers} />
              <Searchfield
                getOptionLabel={getOptionLabel}
                inputLabel="Select DBZ Character"
                options={customers2}
              />
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </ThemeProvider>
  );
};

export default App;
