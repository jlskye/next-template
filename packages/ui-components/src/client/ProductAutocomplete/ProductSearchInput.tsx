import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import * as React from "react";
import { AutocompleteRenderInputParams } from "@mui/material/Autocomplete/Autocomplete";

export const ProductSearchInput = ({
  params,
  searchResultUrl,
}: {
  params: AutocompleteRenderInputParams;
  searchResultUrl: string;
}) => (
  <TextField
    {...params}
    InputProps={{
      ...params.InputProps,
      endAdornment: (
        <InputAdornment
          position="end"
          onClick={() => {
            window.location.assign(searchResultUrl);
          }}
          sx={{ ":hover": { cursor: "pointer", opacity: ".7" }, textAlign: "center", margin: "auto" }}
        >
          <SearchIcon />
        </InputAdornment>
      ),
    }}
    placeholder="search..."
    fullWidth
  />
);
