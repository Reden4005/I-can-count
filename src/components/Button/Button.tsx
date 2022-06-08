import * as Styled from "./style";

interface ButtonProps {
  text: string;
  buttoncolor: string;
  textcolor: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, buttoncolor, textcolor, onClick }) => {
  return (
    <Styled.Button onClick={onClick} sx={{ backgroundColor: buttoncolor, color: textcolor }}>
      {text}
    </Styled.Button>
  );
};
