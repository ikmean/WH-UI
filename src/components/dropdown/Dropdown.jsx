import React, { useState } from "react";
import {
  DropDownContainer,
  DropdownBox,
  DropdownList,
  Gap,
  ListItem,
} from "./DropdownStyles";
import { ReactComponent as DownArrow } from "../../lib/icons/downArrow.svg";
import { ReactComponent as UpArrow } from "../../lib/icons/upArrow.svg";
import { ReactComponent as LocationIcon } from "../../lib/icons/location.svg";
import { ReactComponent as LocationRed } from "../../lib/icons/locationRed.svg";
import { ReactComponent as PropertyIcon } from "../../lib/icons/property.svg";
import { ReactComponent as PropertyRed } from "../../lib/icons/propertyRed.svg";
import { ReactComponent as TypeIcon } from "../../lib/icons/type.svg";
import { ReactComponent as TypeRed } from "../../lib/icons/typeRed.svg";

export default function Dropdown({ text, data }) {
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
          {text === "Location" &&
            (isHovering ? <LocationRed /> : <LocationIcon />)}
          {text === "Property" &&
            (isHovering ? <PropertyRed /> : <PropertyIcon />)}
          {text === "Type" && (isHovering ? <TypeRed /> : <TypeIcon />)}
          <span>{text}</span>
        </Gap>
        <div className="flex">{isHovering ? <UpArrow /> : <DownArrow />}</div>
        <DropdownList
          style={{
            opacity: isHovering ? "1" : "0",
            display: isHovering ? "flex" : "none",
          }}
        >
          {data.map((item) => (
            <ListItem key={item.id}>{item.title}</ListItem>
          ))}
        </DropdownList>
      </DropdownBox>
    </DropDownContainer>
  );
}
