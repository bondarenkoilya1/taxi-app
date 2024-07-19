import styled from "@emotion/styled";

export const NavbarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarTitleStyled = styled.h2`
  font-size: 20px;
`;

export const NavbarListStyled = styled.ul`
  display: flex;
  align-items: center;
`;

export const NavbarListItemStyled = styled.li`
  &:not(:last-child) {
    margin-right: 40px;
  }
`;
