import { NavLink } from "react-router-dom";

import { NavbarListItemStyled, NavbarListStyled, NavbarStyled, NavbarTitleStyled } from "./styled";

import { APPLICATION_NAME } from "constants";

import { navbarFunctionsRoutes, navbarPagesRoutes } from "data";

import type { navbarRoutes } from "types";

const activeStyle = {
  color: "#7792F0"
};

const renderNavbarList = (array: navbarRoutes[]) => {
  return (
    <NavbarListStyled>
      {array.map(({ url, name }) => (
        <NavbarListItemStyled key={crypto.randomUUID()}>
          <NavLink to={url} style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            {name}
          </NavLink>
        </NavbarListItemStyled>
      ))}
    </NavbarListStyled>
  );
};

export const Navbar = () => {
  return (
    <NavbarStyled>
      <NavbarTitleStyled>
        <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          {APPLICATION_NAME}
        </NavLink>
      </NavbarTitleStyled>
      {renderNavbarList(navbarPagesRoutes)}
      {renderNavbarList(navbarFunctionsRoutes)}
    </NavbarStyled>
  );
};
