import React from "react";
import { DropdownBox } from "./DropdownStyles";
import { ReactComponent as DownArrow } from "../../lib/icons/downArrow.svg";
import { ReactComponent as Location } from "../../lib/icons/location.svg";
import { ReactComponent as Property } from "../../lib/icons/property.svg";
import { ReactComponent as Type } from "../../lib/icons/type.svg";

interface props {
  text: string;
}

export default function Dropdown({ text }: props) {
  return (
    <DropdownBox>
      {text === "Location" && <Location />}
      {text === "Property" && <Property />}
      {text === "Type" && <Type />}
      <span>{text}</span>
      <DownArrow />
    </DropdownBox>
  );
}
