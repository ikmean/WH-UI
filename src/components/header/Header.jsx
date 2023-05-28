import React from "react";
import { Link } from "react-router-dom";
import { HeaderWrapper, Right, Nav } from "./HeaderStyles";
import { ReactComponent as Search } from "../../lib/icons/search.svg";
import PostButton from "../button/PostButton";
import Logo from "./Logo";

export default function Header() {
  return (
    <HeaderWrapper className="container">
      <Logo />
      <Nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/properties">Properties</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/agents">Agents</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
      </Nav>
      <Right>
        <Search />
        <PostButton text="Post a property" margin="0 0 0 17.4px" />
      </Right>
    </HeaderWrapper>
  );
}
