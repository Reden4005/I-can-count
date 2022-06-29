import { Button as MuiButton } from "@mui/material";
import { styled } from "@mui/material/styles";

type ButtonProps = {
  variant1?: string;
};

export const Button = styled(MuiButton)<ButtonProps>(({ theme, variant1 }) => ({
  minWidth: "10vw",
  textShadow: `1px 1px ${theme.palette.shadow}`,
  boxShadow: `5px 5px ${theme.palette.shadow}`,
  color: (!!variant1 && theme.palette.color2) || theme.palette.color3,
  backgroundColor: (!!variant1 && theme.palette.color3) || theme.palette.color2,

  "&:hover": {
    color: theme.palette.color3,
    backgroundColor: theme.palette.color1,
    boxShadow: `1px 1px ${theme.palette.shadow}`
  }
}));
