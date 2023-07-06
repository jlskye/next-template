import Box from "@mui/material/Box";
import { Typography, useTheme } from "@mui/material";
import React from "react";

export const GroupFooter = ({ searchResultUrl, inputValue }: { searchResultUrl: string; inputValue: string }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        textAlign: "center",
        height: theme.spacing(7),
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
        <Typography variant="subtitle1" color="text.primary" sx={{ fontWeight: theme.typography.fontWeightBold }}>
          View all results
        </Typography>
      </a>
    </Box>
  );
};
