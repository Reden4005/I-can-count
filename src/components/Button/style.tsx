import { Button as MuiButton } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Button = styled(MuiButton)(({ theme }) => ({
  width: "10vw",
  textShadow: "1px 1px grey",
  boxShadow: "1px 1px grey"
}));
