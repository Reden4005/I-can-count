import { Box as MuiBox } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Box = styled(MuiBox)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "20%",
  backgroundColor: theme.palette.color3,
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  border: "none",
  boxShadow: `5px 5px ${theme.palette.color5}`,

  [theme.breakpoints.down("md")]: {
    width: "60%",
    top: "30%"
  }
}));
