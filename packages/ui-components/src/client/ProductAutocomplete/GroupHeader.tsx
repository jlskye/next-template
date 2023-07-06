import { styled } from "@mui/material/styles";

export const GroupHeader = styled("div")(({ theme }) => ({
  padding: "12px 20px",
  color: theme.palette.primary.main,
  fontWeight: 600,
  backgroundColor: theme.palette.primary.light,
}));
