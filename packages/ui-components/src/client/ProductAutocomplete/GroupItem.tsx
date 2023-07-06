import * as React from "react";
import { Grid, ListItem, Typography, useTheme } from "@mui/material";
import { AutocompleteOption } from "src/client/ProductAutocomplete/index";

export const GroupItem = ({
  renderOptionProps,
  option,
}: {
  renderOptionProps: React.HTMLAttributes<HTMLLIElement>;
  option: AutocompleteOption;
}) => {
  const theme = useTheme();

  return (
    <ListItem
      {...renderOptionProps}
      onClick={() => {
        window.location.assign(option.url);
      }}
      sx={{
        padding: theme.spacing(2),
        "&:not(:last-child)": { borderBottom: `1px solid ${theme.palette.primary.light}` },
        ":hover": { opacity: "0.7" },
        "&.MuiAutocomplete-option.Mui-focused": { backgroundColor: theme.palette.background.default },
      }}
    >
      <Grid container alignItems="center">
        <Grid item sx={{ display: "flex", width: theme.spacing(14), padding: `0 ${theme.spacing(2)}` }}>
          <img src={option.imageUrl} alt={option.productName} />
        </Grid>
        <Grid
          item
          sx={{
            width: `calc(100% - ${theme.spacing(14)})`,
            padding: `0 ${theme.spacing(2)}`,
            wordWrap: "break-word",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="subtitle1" color="text.primary" sx={{ fontWeight: theme.typography.fontWeightBold }}>
            {option.productModelId}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {option.productName}
          </Typography>
          <Typography variant="subtitle1" color="text.primary" sx={{ fontWeight: theme.typography.fontWeightBold }}>
            {option.price}
          </Typography>
        </Grid>
      </Grid>
    </ListItem>
  );
};
