import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import * as React from "react";

export const GroupFooter = ({ searchResultUrl, inputValue }: { searchResultUrl: string; inputValue: string }) => {
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
