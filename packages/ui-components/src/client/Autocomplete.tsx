import * as React from "react";
import { MouseEventHandler, useRef } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MuiAutocomplete from "@mui/material/Autocomplete";
import { Grid, InputAdornment, ListItem, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";

interface AutocompleteOptions {
  code: string;
  name: string;
  value: string;
  price: string;
  imageUrl: string;
}

const GroupHeader = styled("div")(({ theme }) => ({
  padding: "12px 20px",
  color: theme.palette.primary.main,
  fontWeight: 600,
  backgroundColor: theme.palette.primary.light,
}));
const GroupItem = ({
  renderOptionProps,
  option,
}: {
  renderOptionProps: React.HTMLAttributes<HTMLLIElement>;
  option: AutocompleteOptions;
}) => (
  <ListItem
    {...renderOptionProps}
    sx={{
      padding: "20px",
      minHeight: "118px",
      ":hover": { opacity: "0.7" },
      "&.MuiAutocomplete-option.Mui-focused": { backgroundColor: "#fff" },
    }}
  >
    <Grid container alignItems="center" sx={{ height: "100%" }}>
      <Grid item sx={{ display: "flex", width: 112, padding: "0 15px" }}>
        <img src={option.imageUrl} alt={option.name} />
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
          {option.code}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {option.name}
        </Typography>
        <Typography variant="subtitle1" color="text.primary" sx={{ fontWeight: 600 }}>
          {option.price}
        </Typography>
      </Grid>
    </Grid>
  </ListItem>
);

export default function Autocomplete({ onIconClick }: { onIconClick: MouseEventHandler<HTMLDivElement> | undefined }) {
  const [value, setValue] = React.useState<any | null>(null);
  const [inputValue, setInputValue] = React.useState("");
  const [options, setOptions] = React.useState<readonly AutocompleteOptions[]>([]);
  const containerElement = useRef(null);
  const fetchOptions = (_request: { input: string }): Promise<AutocompleteOptions[]> => {
    return Promise.resolve(top100Films);
  };

  React.useEffect(() => {
    let active = true;

    if (inputValue === "") {
      setOptions(value ? [value] : []);
      return undefined;
    }

    fetchOptions({ input: inputValue }).then((res) => {
      if (active) {
        let newOptions: readonly any[] = [];

        if (value) {
          newOptions = [value];
        }

        if (res) {
          newOptions = [...newOptions, ...res];
        }

        setOptions(newOptions);
      }
    });

    return () => {
      active = false;
    };
  }, [value, inputValue]);

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
              },
            },
          },
        }}
        getOptionLabel={(option) => option.name}
        filterOptions={(x) => x}
        options={options}
        autoComplete
        includeInputInList
        filterSelectedOptions
        value={value}
        noOptionsText="No results"
        onChange={(event: any, newValue: AutocompleteOptions | null) => {
          setOptions(newValue ? [newValue, ...options] : options);
          setValue(newValue);
        }}
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
                  onClick={onIconClick}
                  sx={{ ":hover": { cursor: "pointer", opacity: ".7" }, textAlign: "center", margin: "auto" }}
                >
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            placeholder={"search..."}
            fullWidth
          />
        )}
        renderOption={(props, option) =>
          props.id === ":r0:-option-0" ? (
            <>
              <GroupHeader>Products</GroupHeader>
              <GroupItem key={option.code} renderOptionProps={props} option={option} />
            </>
          ) : (
            <GroupItem key={option.code} renderOptionProps={props} option={option} />
          )
        }
      />
    </Box>
  );
}

const top100Films = [
  {
    code: "YTH789689DN1",
    name: "The Shawshank Redemption",
    value: "1994",
    price: "$ 1,200",
    imageUrl: "https://placehold.co/82x106",
  },
  {
    code: "YTH789689DN2",
    name: "The Godfather",
    value: "1972",
    price: "$ 1,200",
    imageUrl: "https://placehold.co/82x106",
  },
  {
    code: "YTH789689DN3",
    name: "The Godfather: Part II",
    value: "1974",
    price: "$ 1,200",
    imageUrl: "https://placehold.co/82x106",
  },
  {
    code: "YTH789689DN4",
    name: "The Dark Knight",
    value: "2008",
    price: "$ 1,200",
    imageUrl: "https://placehold.co/82x106",
  },
  {
    code: "YTH789689DN5",
    name: "12 Angry Men",
    value: "1957",
    price: "$ 1,200",
    imageUrl: "https://placehold.co/82x106",
  },
  {
    code: "YTH789689DN6",
    name: "Schindler's List",
    value: "1993",
    price: "$ 1,200",
    imageUrl: "https://placehold.co/82x106",
  },
  {
    code: "YTH789689DN7",
    name: "Pulp Fiction",
    value: "1994",
    price: "$ 1,200",
    imageUrl: "https://placehold.co/82x106",
  },
];
