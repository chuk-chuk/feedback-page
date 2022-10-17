import React from "react";
import { BoxInputProps } from "./BoxInput.types";

function BoxInput(props: BoxInputProps) {
  const { id, ...rest } = props;

  return (
    <div>
      <label htmlFor={id} className="text-blue-600 font-bold">
        Please give up more details below
      </label>
      <textarea
        id={id}
        className="pl-1 my-1 border rounded border-gray-300"
        {...rest}
      />
    </div>
  );
}

export default BoxInput;
