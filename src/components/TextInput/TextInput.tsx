import React from "react";
import { TextInputProps } from "./TextInput.types";

function TextInput({ id, label, inputClassName, ...rest }: TextInputProps) {
  return (
    <div className="flex flex-col justify-left">
      <label htmlFor={id} className="text-gray-500">
        {label}
      </label>
      <input
        name={id}
        id={id}
        className={`pl-1 mb-1 peer border rounded-md border-slate-300 hover:border-slate-400 focus:outline-none appearance-none ${inputClassName}`}
        {...rest}
      />
    </div>
  );
}

export default TextInput;
