import * as React from "react";
import { Divider as MuiDivider, DividerProps } from "@mui/material";

export const Divider = (props: DividerProps) => {
  return <MuiDivider light {...props} />;
};
