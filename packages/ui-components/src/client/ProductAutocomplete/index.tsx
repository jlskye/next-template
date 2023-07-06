import React, { useEffect, useMemo, useRef, useState } from "react";
import Box from "@mui/material/Box";
import MuiAutocomplete from "@mui/material/Autocomplete";
import { debounce, useTheme } from "@mui/material";
import { ProductSearchInput } from "src/client/ProductAutocomplete/ProductSearchInput";
import { OptionGroup } from "src/client/ProductAutocomplete/OptionGroup";

export interface AutocompleteOption {
  productModelId: string;
  productName: string;
  value: string;
  price: string;
  imageUrl: string;
  url: string;
}
export default function ProductAutocomplete({
  searchResultUrl,
  fetchOptions,
  width = 300,
}: {
  searchResultUrl: string;
  fetchOptions: ({ input }: { input: string }) => Promise<AutocompleteOption[] | undefined>;
  width: string | number;
}) {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState<readonly AutocompleteOption[]>([]);
  const containerElement = useRef(null);
  const debouncedFetch = useMemo(
    () =>
      debounce(
        (inputValue: string) =>
          fetchOptions({ input: inputValue }).then((res) => {
            setOptions(res ?? []);
            setLoading(false);
          }),
        400,
      ),
    [fetchOptions],
  );

  useEffect(() => {
    if (inputValue === "") {
      setOptions([]);
      return undefined;
    }

    setLoading(true);
    debouncedFetch(inputValue);
  }, [inputValue]);

  return (
    <Box ref={containerElement}>
      {/* magic code for hiding box shadow */}
      <Box
        sx={{
          position: "relative",
          inset: "47px auto auto 0",
          width,
          height: 12,
          backgroundColor: theme.palette.background.default,
          zIndex: theme.zIndex.modal + 1,
        }}
      />
      <MuiAutocomplete
        sx={{ width }}
        componentsProps={{
          paper: {
            sx: {
              "& ul": {
                padding: 0,
                maxHeight: 500,
              },
            },
          },
        }}
        getOptionLabel={(option) => (typeof option === "string" ? option : option.productModelId)}
        filterOptions={(x) => x}
        options={options}
        autoComplete
        freeSolo
        loading={loading}
        onInputChange={(_, newInputValue) => {
          setInputValue(newInputValue);
        }}
        renderInput={(params) => <ProductSearchInput params={params} searchResultUrl={searchResultUrl} />}
        renderOption={(props, option) => (
          <OptionGroup
            key={option.productModelId}
            options={options}
            renderProps={props}
            currentOption={option}
            searchResultUrl={searchResultUrl}
            inputValue={inputValue}
          />
        )}
      />
    </Box>
  );
}
