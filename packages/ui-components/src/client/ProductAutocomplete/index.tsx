import React, { useEffect, useMemo, useRef, useState } from "react";
import Box from "@mui/material/Box";
import MuiAutocomplete from "@mui/material/Autocomplete";
import { debounce } from "@mui/material";
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
}: {
  searchResultUrl: string;
  fetchOptions: ({ input }: { input: string }) => Promise<AutocompleteOption[] | undefined>;
}) {
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
    <Box
      sx={{
        width: 300,
      }}
      ref={containerElement}
    >
      {/* magic code for hiding box shadow */}
      <Box
        sx={{
          position: "relative",
          inset: "47px auto auto 0",
          height: 12,
          backgroundColor: "#fff",
          zIndex: 1301,
        }}
      />
      <MuiAutocomplete
        sx={{ width: 300 }}
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
        filterSelectedOptions
        loading={loading}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        renderInput={(params) => <ProductSearchInput params={params} searchResultUrl={searchResultUrl} />}
        renderOption={(props, option) => (
          <OptionGroup
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
