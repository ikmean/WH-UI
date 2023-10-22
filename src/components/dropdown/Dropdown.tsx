import React, { useState } from "react";
import {
  DropDownContainer,
  DropdownBox,
  DropdownList,
  Gap,
} from "./DropdownStyles";
import { ReactComponent as DownArrow } from "../../lib/icons/downArrow.svg";
import { ReactComponent as UpArrow } from "../../lib/icons/upArrow.svg";
import { ReactComponent as LocationIcon } from "../../lib/icons/location.svg";
import { ReactComponent as PropertyIcon } from "../../lib/icons/property.svg";
import { ReactComponent as TypeIcon } from "../../lib/icons/type.svg";
import { colors } from "../../lib/colors";

interface props {
  text: string;
}

export default function Dropdown({ text }: props) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <DropDownContainer>
      <DropdownBox onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <Gap>
          {text === "Location" && <LocationIcon />}
          {text === "Property" && <PropertyIcon />}
          {text === "Type" && <TypeIcon />}
          <span>{text}</span>
        </Gap>
        <div className="flex">{isHovering ? <UpArrow /> : <DownArrow />}</div>
      </DropdownBox>
      <DropdownList style={{ opacity: isHovering ? "100%" : "0%" }}>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </DropdownList>
    </DropDownContainer>
  );
}
