import { ChangeEvent, TextareaHTMLAttributes } from "react";

export type BoxInputProps = {
  id: string;
  textValue: string;
  handleOnChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;
