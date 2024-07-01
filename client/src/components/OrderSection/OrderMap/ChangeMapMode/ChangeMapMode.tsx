import React from "react";

import {
  ChangeMapModeButtonStyled,
  ChangeMapModeCheckboxStyled,
  ChangeMapModeContainerStyled
} from "./styled";

import { MAP_MODES } from "constants/index.ts";

import type { ChangeMapModeProps } from "types/Map";

export const ChangeMapMode: React.FC<ChangeMapModeProps> = ({ mode, toggleMode }) => {
  return (
    <ChangeMapModeContainerStyled>
      <ChangeMapModeButtonStyled type="button" onClick={toggleMode}>
        I want to set markers
      </ChangeMapModeButtonStyled>
      <ChangeMapModeCheckboxStyled
        type="checkbox"
        checked={mode === MAP_MODES.SET_MARKER}
        readOnly
      />
    </ChangeMapModeContainerStyled>
  );
};
