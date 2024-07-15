import { Link } from "react-router-dom";

import { HeaderNavListStyled, HeaderNavStyled, HeaderStyled } from "./styled";
import { ContainerStyled } from "styled";

export const Header = () => {
  return (
    <HeaderStyled>
      <ContainerStyled>
        <HeaderNavStyled>
          <HeaderNavListStyled>
            <Link
              to="/online-order"
              style={{
                marginRight: "40px"
              }}>
              Order
            </Link>
            <Link to="/auth">Log in</Link>
          </HeaderNavListStyled>
        </HeaderNavStyled>
      </ContainerStyled>
    </HeaderStyled>
  );
};
