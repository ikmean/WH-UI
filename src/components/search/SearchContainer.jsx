import React, { useContext, useEffect } from "react";
import Search from "./Search.jsx";
import Dropdown from "../dropdown/Dropdown.jsx";
import { SearchContainerStyles } from "./SearchStyles.jsx";
import { AppContext } from "../../context/createContext";

export default function SearchContainer({
	location,
	propertyCategory,
	dealType,
}) {
	return (
		<SearchContainerStyles>
			<Search />
			<Dropdown text="Location" data={location} />
			<Dropdown text="Property" data={propertyCategory} />
			<Dropdown text="Type" data={dealType} />
		</SearchContainerStyles>
	);
}
