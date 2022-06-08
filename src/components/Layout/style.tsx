import { Box as MuiBox } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Box = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  width: "95vw",
  height: "95vh",
  margin: "auto",
  marginTop: "2.5vh",
  flexDirection: "column",
  background: theme.palette.background.default,
  borderRadius: theme.shape.borderRadius
}));
