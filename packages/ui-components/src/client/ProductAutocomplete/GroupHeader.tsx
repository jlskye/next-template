import { styled } from "@mui/material/styles";

export const GroupHeader = styled("div")(({ theme }) => ({
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  color: theme.palette.primary.main,
  fontWeight: theme.typography.fontWeightBold,
  backgroundColor: theme.palette.primary.light,
}));
