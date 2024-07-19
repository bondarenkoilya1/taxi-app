import { HeaderStyled } from "./styled";
import { ContainerStyled } from "styled";

import { Navbar } from "components";

export const Header = () => {
  return (
    <HeaderStyled>
      <ContainerStyled>
        <Navbar />
      </ContainerStyled>
    </HeaderStyled>
  );
};
