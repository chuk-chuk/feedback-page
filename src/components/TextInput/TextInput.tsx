import React from "react";
import { TextInputProps } from "./TextInput.types";

function TextInput({ id, inputClassName, ...rest }: TextInputProps) {
  return (
    <div className="flex justify-left">
      <input
        name={id}
        id={id}
        className={`pl-1 ml-1 my-1 peer border rounded-md border-slate-300 hover:border-slate-400 focus:outline-none appearance-none ${inputClassName}`}
        {...rest}
      />
    </div>
  );
}

export default TextInput;
