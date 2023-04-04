import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Icon } from "../../lib/icons/icon.svg";
import { Left } from "./HeaderStyles";

export default function Logo() {
  return (
      <Link to="/">
    <Left>
      <Icon />
      <h1>Realtor X</h1>
    </Left>
      </Link>
  );
}
