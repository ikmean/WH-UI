import React from "react";
import Search from "./Search.jsx";
import Dropdown from "../dropdown/Dropdown";
import { SearchContainerStyles } from "./SearchStyles";

export default function SearchContainer() {
	return (
		<SearchContainerStyles>
			<Search />
			<Dropdown text="Location" />
			<Dropdown text="Property" />
			<Dropdown text="Type" />
		</SearchContainerStyles>
	);
}
