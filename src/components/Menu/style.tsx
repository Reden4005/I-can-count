import { Box as MuiBox } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Box = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  margin: "auto",
  gap: theme.spacing(4),
  marginTop: theme.spacing(7),
  flexWrap: "wrap"
}));
