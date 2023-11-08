import React from "react";
import { BoxStyles } from "./SubscribeStyles";
import { InputComponent } from "../input/Input";
import { ReactComponent as Mail } from "../../lib/icons/mail.svg";
// import Search from "../../lib/icons/search.svg"

interface SubscribeBoxProps {
  text: string;
}

export default function SubscribeBox({ text }: SubscribeBoxProps) {
  return (
    <BoxStyles>
      <InputComponent placeholder={text} />
      <Mail />
      {/* <Search /> */}
    </BoxStyles>
  );
}
