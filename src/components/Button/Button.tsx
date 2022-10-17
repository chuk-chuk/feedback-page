import React from "react";
import { ButtonProps } from "./Button.types";

function Button(props: ButtonProps) {
  const { title, buttonClassName, ...rest } = props;
  return (
    <button
      className={`px-5 py-1 bg-blue-500 text-white rounded-md ${buttonClassName}`}
      {...rest}
    >
      {title}
    </button>
  );
}

export default Button;
