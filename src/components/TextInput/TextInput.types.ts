import { InputHTMLAttributes } from "react";

export type TextInputProps = {
  id: string;
  label: string;
  inputClassName?: string;
} & InputHTMLAttributes<HTMLInputElement>;
