import styled from "styled-components";

import { Input } from "../../../components/Input";

export const OrderMenuStyled = styled.div`
  width: 30%;
  margin-right: 100px;
`;

export const OrderMenuInputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OrderMenuInput = styled(Input)`
  margin-bottom: 20px;
  padding: 10px;
  font-size: 20px;
  border: 1px solid #000;
  border-radius: 4px;

  &:last-child {
    margin-bottom: 0;
  }
`;
