import React from "react";
import { BoxInputProps } from "./BoxInput.types";

function BoxInput(props: BoxInputProps) {
  const { id, textValue, handleOnChange, ...rest } = props;

  return (
    <div>
      <label htmlFor={id} className="text-blue-600 font-bold">
        Please give up more details below
      </label>
      <textarea
        id={id}
        className="border border-gray-300"
        value={textValue}
        onChange={handleOnChange}
        rows={5}
        cols={30}
        {...rest}
      />
    </div>
  );
}

export default BoxInput;
