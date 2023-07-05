import * as React from "react";
import { MouseEventHandler, useRef } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MuiAutocomplete from "@mui/material/Autocomplete";
import { Grid, InputAdornment, ListItem, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";

interface AutocompleteOption {
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

const GroupFooter = () => {
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
      <a href={"https://google.com"}>
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
  onIconClick,
}: {
  onIconClick: MouseEventHandler<HTMLDivElement> | undefined;
}) {
  const [loading, setLoading] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const [options, setOptions] = React.useState<readonly AutocompleteOption[]>([]);
  const containerElement = useRef(null);
  const fetchOptions = ({ input }: { input: string }): Promise<AutocompleteOption[]> => {
    console.log(input);
    return Promise.resolve(top100Films);
  };

  React.useEffect(() => {
    let active = true;

    if (inputValue === "") {
      setOptions([]);
      return undefined;
    }

    setLoading(true);
    fetchOptions({ input: inputValue }).then((res) => {
      if (active) {
        let newOptions: readonly any[] = [];

        if (res) {
          newOptions = [...newOptions, ...res];
        }

        setOptions(newOptions);
        setLoading(false);
      }
    });

    return () => {
      active = false;
    };
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
        renderOption={(props, option) => {
          const index = options.findIndex((x) => x.productModelId === option.productModelId);

          switch (index) {
            case 0:
              return (
                <>
                  <GroupHeader key={"header"}>Products</GroupHeader>
                  <GroupItem key={option.productModelId} renderOptionProps={props} option={option} />
                </>
              );
            case options.length - 1:
              return (
                <>
                  <GroupItem key={option.productModelId} renderOptionProps={props} option={option} />
                  <GroupFooter key={"footer"} />
                </>
              );
            default:
              return <GroupItem key={option.productModelId} renderOptionProps={props} option={option} />;
          }
        }}
      />
    </Box>
  );
}

const top100Films: AutocompleteOption[] = [
  {
    productModelId: "YTH789689DN1",
    productName: "The Shawshank Redemption",
    value: "1994",
    price: "$ 1,200",
    imageUrl: "https://placehold.co/82x106",
    url: "/product/1",
  },
  {
    productModelId: "YTH789689DN2",
    productName: "The Godfather",
    value: "1972",
    price: "$ 1,200",
    imageUrl: "https://placehold.co/82x106",
    url: "/product/1",
  },
  {
    productModelId: "YTH789689DN3",
    productName: "The Godfather: Part II",
    value: "1974",
    price: "$ 1,200",
    imageUrl: "https://placehold.co/82x106",
    url: "/product/1",
  },
];
