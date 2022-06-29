import { SxProps, Theme } from "@mui/material";
import * as Styled from "./style";

interface ButtonProps {
  text: string;
  variant1?: string;
  onClick?: () => void;
  sx?: SxProps<Theme>;
  type?: "button" | "submit" | "reset" | undefined;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, variant1, sx, type }) => {
  return (
    <Styled.Button onClick={onClick} variant1={variant1} sx={sx} type={type}>
      {text}
    </Styled.Button>
  );
};
