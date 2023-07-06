import * as React from "react";
import { useMemo, useRef } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MuiAutocomplete from "@mui/material/Autocomplete";
import { debounce, Grid, InputAdornment, ListItem, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";

export interface AutocompleteOption {
  productModelId: string;
  productName: string;
  value: string;
  price: string;
  imageUrl: string;
  url: string;
}

const GroupHeader = styled("div")(({ theme }) => ({
  padding: "12px 20px",
  color: theme.palette.primary.main,
  fontWeight: 600,
  backgroundColor: theme.palette.primary.light,
}));

const GroupFooter = ({ searchResultUrl, inputValue }: { searchResultUrl: string; inputValue: string }) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ":hover": { opacity: "0.7" },
        "& a": {
          textDecoration: "none",
        },
      }}
    >
      <a href={`${searchResultUrl}?text=${inputValue}`}>
        <Typography variant="subtitle1" color="text.primary" sx={{ fontWeight: 600 }}>
          View all results
        </Typography>
      </a>
    </Box>
  );
};
const GroupItem = ({
  renderOptionProps,
  option,
}: {
  renderOptionProps: React.HTMLAttributes<HTMLLIElement>;
  option: AutocompleteOption;
}) => (
  <ListItem
    {...renderOptionProps}
    onClick={() => {
      window.location.assign(option.url);
    }}
    sx={{
      padding: "20px",
      minHeight: "118px",
      "&:not(:last-child)": { borderBottom: "1px solid #e0e0e0" },
      ":hover": { opacity: "0.7" },
      "&.MuiAutocomplete-option.Mui-focused": { backgroundColor: "#fff" },
    }}
  >
    <Grid container alignItems="center" sx={{ height: "100%" }}>
      <Grid item sx={{ display: "flex", width: 112, padding: "0 15px" }}>
        <img src={option.imageUrl} alt={option.productName} />
      </Grid>
      <Grid
        item
        sx={{
          width: "calc(100% - 112px)",
          height: "100%",
          padding: "0 15px",
          wordWrap: "break-word",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="subtitle1" color="text.primary" sx={{ fontWeight: 600 }}>
          {option.productModelId}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {option.productName}
        </Typography>
        <Typography variant="subtitle1" color="text.primary" sx={{ fontWeight: 600 }}>
          {option.price}
        </Typography>
      </Grid>
    </Grid>
  </ListItem>
);

export default function ProductAutocomplete({
  searchResultUrl,
  fetchOptions,
}: {
  searchResultUrl: string;
  fetchOptions: ({ input }: { input: string }) => Promise<AutocompleteOption[] | undefined>;
}) {
  const [loading, setLoading] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const [options, setOptions] = React.useState<readonly AutocompleteOption[]>([]);
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

  React.useEffect(() => {
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
        renderInput={(params) => (
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
        )}
        renderOption={(props, option) => {
          const index = options.findIndex((x) => x.productModelId === option.productModelId);

          if (index === 0 && options.length === 1) {
            return (
              <>
                <GroupHeader key={"header"}>Products</GroupHeader>
                <GroupItem key={option.productModelId} renderOptionProps={props} option={option} />
                <GroupFooter key={"footer"} searchResultUrl={searchResultUrl} inputValue={inputValue} />
              </>
            );
          }

          if (index === 0) {
            return (
              <>
                <GroupHeader key={"header"}>Products</GroupHeader>
                <GroupItem key={option.productModelId} renderOptionProps={props} option={option} />
              </>
            );
          }

          if (index === options.length - 1) {
            return (
              <>
                <GroupItem key={option.productModelId} renderOptionProps={props} option={option} />
                <GroupFooter key={"footer"} searchResultUrl={searchResultUrl} inputValue={inputValue} />
              </>
            );
          }

          return <GroupItem key={option.productModelId} renderOptionProps={props} option={option} />;
        }}
      />
    </Box>
  );
}
