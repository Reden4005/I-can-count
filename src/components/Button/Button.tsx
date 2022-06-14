import * as Styled from "./style";

interface ButtonProps {
  text: string;
  variant1?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, variant1 }) => {
  return (
    <Styled.Button onClick={onClick} variant1={variant1}>
      {text}
    </Styled.Button>
  );
};
