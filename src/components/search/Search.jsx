import React from "react";
import { SearchBox } from "./SearchStyles";
import Button from "../button/Button";
import { ReactComponent as GraySearch } from "../../lib/icons/graySearch.svg";

export default function Search() {
  return (
    <SearchBox>
      <div>
        <GraySearch />
        <span>Search for properties</span>
      </div>
      <Button text="Search" color="red"/>
    </SearchBox>
  );
}
