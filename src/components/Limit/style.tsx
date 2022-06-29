import { Box as MuiBox } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Box = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  flexWrap: "wrap"
}));

export const ButtonBox = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: theme.spacing(5),
  gap: theme.spacing(2),
  flexWrap: "wrap"
}));
