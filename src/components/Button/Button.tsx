import { SxProps, Theme } from "@mui/material";
import * as Styled from "./style";

interface ButtonProps {
  text: string;
  variant1?: string;
  onClick?: () => void;
  sx?: SxProps<Theme>;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, variant1, sx, type, disabled }) => (
  <Styled.Button onClick={onClick} variant1={variant1} sx={sx} type={type} disabled={disabled}>
    {text}
  </Styled.Button>
);
