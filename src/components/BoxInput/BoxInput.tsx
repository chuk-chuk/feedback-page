import React from "react";
import { BoxInputProps } from "./BoxInput.types";

function BoxInput(props: BoxInputProps) {
  const { id, ...rest } = props;

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-blue-600 font-bold">
        Please give up more details below
      </label>
      <textarea
        id={id}
        className="p-2 my-1 text-sm border rounded border-gray-300 mb-4"
        {...rest}
      />
    </div>
  );
}

export default BoxInput;
