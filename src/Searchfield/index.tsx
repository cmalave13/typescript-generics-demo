import { ReactElement } from "react";
import {
  Autocomplete,
  AutocompleteRenderInputParams,
  Stack,
  TextField,
} from "@mui/material";

export const Searchfield = <T extends {}>({
  getOptionLabel,
  inputLabel,
  options,
}: TSearchField<T>): ReactElement => {
  return (
    <Stack>
      <Autocomplete
        disablePortal
        getOptionLabel={getOptionLabel}
        id="autocomplete-box"
        options={options}
        renderInput={(params: AutocompleteRenderInputParams): ReactElement => (
          <TextField {...params} label={inputLabel} />
        )}
      />
    </Stack>
  );
};

export type TSearchField<T> = {
  getOptionLabel?: (option: T) => string;
  inputLabel: string;
  options: T[];
};
