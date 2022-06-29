import { ChangeEvent, ChangeEventHandler } from "react";
import * as Styled from "./style";

interface InputProps {
  type?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({ type, onChange, onSubmit }) => {
  return <Styled.Input type={type} onChange={onChange} onSubmit={onSubmit} />;
};
