import React from "react";
import { ButtonProps } from "./Button.types";

function Button(props: ButtonProps) {
  const { title, buttonClassName, disabled, ...rest } = props;
  return (
    <button
      className={`px-5 py-1 ${
        disabled ? "bg-blue-200" : "bg-blue-500"
      } text-white rounded-md ${buttonClassName}`}
      disabled={disabled}
      {...rest}
    >
      {title}
    </button>
  );
}

export default Button;
