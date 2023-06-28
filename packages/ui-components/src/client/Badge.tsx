import * as React from "react";
import { Badge as MuiBadge } from "@mui/material";
import { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledBadge = styled(MuiBadge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export const Badge = (props: BadgeProps) => {
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary" {...props}>
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
};
