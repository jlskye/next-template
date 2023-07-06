import * as React from "react";
import { Grid, ListItem, Typography } from "@mui/material";
import { AutocompleteOption } from "src/client/ProductAutocomplete/index";

export const GroupItem = ({
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
