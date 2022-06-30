import { ChangeEvent } from "react";
import * as Styled from "./style";

interface InputProps {
  type?: string;
  id?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
}

export const Input: React.FC<InputProps> = ({ type, onChange, onSubmit, id, error }) => (
  <Styled.Input type={type} onChange={onChange} onSubmit={onSubmit} id={id} error={error} />
);
