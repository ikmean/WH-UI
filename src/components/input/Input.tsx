import React from "react";
import { InputStyles } from "./InputStyles";

export const InputComponent = ({ placeholder }: any) => {
  return (
    <InputStyles>
      <input placeholder={placeholder}></input>
    </InputStyles>
  );
};
