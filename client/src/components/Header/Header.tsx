import { Link } from "react-router-dom";

import {
  HeaderNavListStyled,
  HeaderNavStyled,
  HeaderStyled,
  HeaderTitleStyled,
  HeaderWrapperStyled
} from "./styled";
import { ContainerStyled } from "styled";

import { APPLICATION_NAME } from "constants";

// todo: create nav component
export const Header = () => {
  return (
    <HeaderStyled>
      <ContainerStyled>
        <HeaderWrapperStyled>
          {/*  todo: should be a link to the main page */}
          <HeaderTitleStyled>{APPLICATION_NAME}</HeaderTitleStyled>
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
        </HeaderWrapperStyled>
      </ContainerStyled>
    </HeaderStyled>
  );
};
