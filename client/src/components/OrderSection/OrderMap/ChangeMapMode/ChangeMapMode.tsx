import React from "react";

import { ChangeMapModeCheckboxStyled, ChangeMapModeContainerStyled } from "./styled";

import { MAP_MODES } from "constants/index.ts";

import { ButtonComponent } from "components/ui";

import type { ChangeMapModeProps } from "types/Map";

export const ChangeMapMode: React.FC<ChangeMapModeProps> = ({ mode, toggleMode }) => {
  return (
    <ChangeMapModeContainerStyled>
      <ButtonComponent variant="contained" type="button" onClick={toggleMode} disabled>
        I want to set markers
      </ButtonComponent>
      <ChangeMapModeCheckboxStyled type="radio" checked={mode === MAP_MODES.SET_MARKER} readOnly />
    </ChangeMapModeContainerStyled>
  );
};
